import TextField from '@mui/material/TextField';
import React from 'react';
import InputUnstyled from '@mui/core/InputUnstyled';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Swal from 'sweetalert2'



import { styled } from '@mui/system';


const StyledInputElement = styled('input')`
  width: 92%;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 220px;
    transition: width 200ms ease-out;
  }
`;

const Pay = () => {

    const handleContact = (e) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be Payment Please weight",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Pay now'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Sorry',
                    'Payment is not implemented.',
                    'error'
                )
            }
        })

        e.preventDefault();
    }

    return (
        <div id="contact" style={{ backgroundColor: '#dfe4ea', borderRadius: '50px' }}>
            <div className="container py-5">
                <h2 className="fw-bold text-info">Payment is coming soon</h2>
                <form onSubmit={handleContact} className=" py-3 ">

                    <TextField required
                        style={{ width: '45%' }}
                        className=" bg-light rounded me-2"
                        label="First name"
                        type="text"
                        autoComplete="current-password"
                    />

                    <TextField required
                        style={{ width: '45%' }}
                        className=" bg-light ms-2 rounded"
                        label="Last name"
                        type="text"
                        autoComplete="current-password"
                    /> <br /> <br />

                    <TextField
                        style={{ width: '45%' }}
                        className=" bg-light rounded me-2"
                        label="Country"
                        type="text"
                        autoComplete="current-password"
                    />

                    <TextField
                        style={{ width: '45%' }}
                        className=" bg-light ms-2 rounded"
                        label="City"
                        type="text"
                        autoComplete="current-password"
                    /> <br /> <br />

                    <TextField required
                        style={{ width: '45%' }}
                        className=" bg-light rounded me-2"
                        label="Email"
                        type="email"
                        autoComplete="current-password"
                    />
                    <TextField
                        style={{ width: '45%' }}
                        className=" bg-light ms-2 rounded"
                        label="Address"
                        type="text"
                        autoComplete="current-password"
                    /> <br /><br />

                    <InputUnstyled components={{ Input: StyledInputElement }} /> <br />
                    <InputUnstyled components={{ Input: StyledInputElement }} /> <br />
                    <TextareaAutosize
                        aria-label="Description"
                        minRows={3}
                        placeholder="Description"
                        style={{ width: '92%', borderRadius: "10px", padding: '4px 10px' }}
                    /> <br />
                    <br />

                    <button type="submit" className="btn btn-light w-50 py-2 ">SUBMIT</button>

                </form>
            </div>

        </div>
    );
};

export default Pay;