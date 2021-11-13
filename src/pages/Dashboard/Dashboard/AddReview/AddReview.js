import axios from 'axios';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import useAuth from '../../../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data, user);

        reset()
        axios.post('https://lit-citadel-97865.herokuapp.com/review', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Review added Successfully',
                        showConfirmButton: false,
                        timer: 3000
                    })
                    reset()
                }
            })
            .catch(error => {
                console.log(error);
            })

    };

    return (
        <div className=" py-3 ">
            <h2 className="fw-bold text-primary mt-3">ADD REVIEW</h2>
            <div className="container shadow p-4 form-container w-75 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-100  p-3 form-control">
                    <Form.Label>Name</Form.Label>
                    <input className="mb-2 py-2 form-control" defaultValue={user.displayName || ""} {...register("name", { required: true, maxLength: 40 })} placeholder="Name" />

                    <Form.Label>Email</Form.Label>
                    <input className="mb-2 py-2 form-control" defaultValue={user.email} {...register("email", { required: true })} placeholder="Name" />

                    <Form.Label>Ratings</Form.Label>
                    <input className="mb-2 py-2 form-control " type="number" {...register("rating", {})} placeholder="Rate us between 0 to 5" />

                    <Form.Label>Image</Form.Label>
                    <input className="mb-2 py-2 form-control " defaultValue={user.photoURL} {...register("photoURL", { required: true })} placeholder="Image" />

                    <Form.Label>Address</Form.Label>
                    <input className="mb-2 py-2 form-control " {...register("address", { required: true })} placeholder="Address" />

                    <Form.Label>Comments</Form.Label>
                    <textarea className="mb-2 py-2 form-control " {...register("message", { required: true })} placeholder="Description" />
                    <input className="w-100 py-1 fs-6 btn btn-danger " type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;