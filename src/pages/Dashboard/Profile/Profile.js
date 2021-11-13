import React from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';


const Profile = () => {
    const { user, logOut } = useAuth();
    const history = useHistory();

    const handleLogoutProfile = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't to Logout!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                history.push('/')
                Swal.fire(
                    'Login out',
                    'Logout successfully.',
                    'success'
                )
            }
        })
    }

    return (
        <div>
            <div className="mb-5 text-center w-50 mx-auto mt-5 shadow " style={{ borderRadius: '30px' }}>
                <Card
                    className="border-0 h-100" style={{ borderRadius: '30px' }}
                >
                    <Card.Img variant="top" src={user.photoURL} className="p-3 w-50 mx-auto" style={{ maxHeight: "250px", borderRadius: '30px' }} />
                    <Card.Body className="pt-0">
                        <Card.Title as="h5" className="">{user.displayName}</Card.Title>
                        <Card.Title as="h5" className="">{user.email}</Card.Title>
                    </Card.Body>
                    <button onClick={handleLogoutProfile} className="btn btn-danger w-75 mx-auto mb-3">LOGOUT</button>
                </Card>
            </div>
        </div>
    );
};

export default Profile;