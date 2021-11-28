import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, } from "firebase/auth";
import initializeFirebase from "../pages/Login/Firebase/Firebase.init";
import Swal from 'sweetalert2'




// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInWithGoogle = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = result.user;
                // save to database or update
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('')

            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setLoading(false));
    }

    // create new user with register
    const registerUser = (email, Password, name, history) => {
        createUserWithEmailAndPassword(auth, email, Password)
            .then(() => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                // database save user
                saveUser(email, name, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    setAuthError(error.message);
                });

                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // all ready create user login
    const loginUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {

                handleResponse(user.user, location, history)
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    };


    // handle logged in user
    const handleResponse = (user, location, history) => {

        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
        if (user.email === 'admin@gmail.com') {

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-outline-primary ms-2 px-4 py-0',
                    cancelButton: 'btn btn-outline-danger me-2 px-4 py-0'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Warning',
                text: 'You have entered the admin panel for testing. Please do not abuse this facility!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ok',
                cancelButtonText: 'No',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Admin login success',
                        'Now you can check out all the features in the admin panel',
                        'success'
                    )
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    logOut()
                    swalWithBootstrapButtons.fire(
                        'Cancelled Request',
                        'Thank you. You can log in as a user if you want with another email.',
                        'error'
                    )
                }
            })

        };
    };




    // Log out user 
    const logOut = () => {
        signOut(auth).then(() => {
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message);
        })
            .finally(() => setLoading(false));
    };

    // firebase observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false)
        })
        return () => unsubscribe;
    }, [auth]);

    useEffect(() => {
        fetch(`https://lit-citadel-97865.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error} `,

                })
            })
    }, [user.email]);



    /// save to database 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        console.log(user);
        fetch('https://lit-citadel-97865.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return {
        user,
        admin,
        authError,
        loading,
        signInWithGoogle,
        registerUser,
        loginUser,
        logOut,
        setLoading,
        setAuthError
    }
};

export default useFirebase;