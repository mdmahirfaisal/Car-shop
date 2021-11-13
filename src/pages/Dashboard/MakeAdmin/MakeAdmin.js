import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Swal from 'sweetalert2'




const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
        // console.log(email);
    }

    const handleMakeAdmin = (e) => {
        const user = { email };
        fetch('', {
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
                    if (adminSuccess) {
                        Swal.fire({
                            position: 'top-middle',
                            icon: 'success',
                            title: 'New Admin Created Successfully',
                            showConfirmButton: false,
                            timer: 3000
                        })
                    }
                }
            })

        e.preventDefault();
    }

    return (
        <div >
            <div className="container">
                <div className="shadow py-4" style={{ borderRadius: '30px', height: '600px' }}>
                    <h2 className="fw-bold text-primary">MAKE AN A ADMIN</h2>
                    <form onSubmit={handleMakeAdmin} className="mt-5">
                        <TextField type="email" onBlur={handleOnBlur} label="Email" variant="standard" sx={{ width: '70%' }} />  <br />
                        <Button sx={{ mt: 2, width: '70%' }} type="submit" variant="contained">Make Admin</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;