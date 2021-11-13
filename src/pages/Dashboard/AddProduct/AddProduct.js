import axios from 'axios';
import './AddProduct.css';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'


const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset()
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'New product added Successfully',
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
        <div className="add-background py-3 ">
            <h2 className="fw-bold text-secondary mt-5">PLEASE ADD A PRODUCT</h2>
            <div className="container shadow p-5 form-container">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-100  p-3 form-control">
                    <Form.Label>Name</Form.Label>
                    <input className="mb-2 form-control " {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <Form.Label>Price</Form.Label>
                    <input className="mb-2 form-control " type="number" {...register("price")} placeholder="Price" />
                    <Form.Label>Image URL</Form.Label>
                    <input className="mb-2 form-control " {...register("img")} placeholder="Image URL" />
                    <Form.Label>Description</Form.Label>
                    <textarea className="mb-2 form-control " {...register("description")} placeholder="Description" />
                    <input className="w-75 mx-auto rounded-pill btn btn-danger" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;