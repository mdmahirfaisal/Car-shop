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
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <h2>make an admin</h2>
            <form onSubmit={handleMakeAdmin}>
                <TextField type="email" onBlur={handleOnBlur} label="Email" variant="standard" sx={{ width: '50%' }} />  <br />
                <Button sx={{ mt: 2, width: '48%' }} type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;