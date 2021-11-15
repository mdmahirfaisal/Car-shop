import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Swal from 'sweetalert2'




const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }


    const handleMakeAdmin = (e) => {
        const user = { email };

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-info ms-2',
                cancelButton: 'btn btn-danger me-2'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be Create an a admin!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, Create !',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://lit-citadel-97865.herokuapp.com/users/admin', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            console.log(data);
                            setEmail('');
                            setAdminSuccess(true);
                            swalWithBootstrapButtons.fire(
                                'Created',
                                'New admin created successfully.',
                                'success'
                            )
                        }
                        else if (!data.modifiedCount) {

                        }
                    })
            }
            else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Admin created request canceled :)',
                    'error'
                )
            }
        })
        e.preventDefault();
    }
    return (
        <div >
            <div className="container">
                <div className="shadow py-4" style={{ borderRadius: '30px', height: '600px', backgroundColor: '#f1f2f6' }}>
                    <h2 className="fw-bold text-primary">MAKE AN A ADMIN</h2>
                    <form onSubmit={handleMakeAdmin} className="mt-5">
                        <TextField id="admin-input" type="email" required onBlur={handleOnBlur} label="Email" variant="standard" sx={{ width: '70%' }} />  <br />
                        <Button sx={{ mt: 2, width: '70%' }} type="submit" variant="contained">Make Admin</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;