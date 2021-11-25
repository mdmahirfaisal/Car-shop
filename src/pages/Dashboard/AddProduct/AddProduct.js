import axios from 'axios';
import './AddProduct.css';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';
import { CircularProgress } from '@mui/material';



const AddProduct = () => {
    const [uploading, setUploading] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const [carImg, setCarImg] = useState(null)

    const handleImgUpload = async e => {
        const imageData = new FormData();
        console.log(e.target.files[0]);
        imageData.set('key', 'b1329658ac9cd12416e1b24f8e686347');
        await imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(response => {
                console.log(response.data.data.display_url);

                setCarImg(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    };
    const onSubmit = productData => {
        const data = {
            name: productData.name,
            price: productData.price,
            description: productData.description,
            img: carImg
        };

        reset()
        setUploading(true)
        axios.post('https://lit-citadel-97865.herokuapp.com/products', data)
            .then(res => {
                console.log(res);
                setUploading(false)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'New product added Successfully',
                        showConfirmButton: false,
                        timer: 3000
                    })

                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Order placed Canceled!',
                    })
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error}`,
                })
            })

    };

    return (
        <div className="container py-3 ">
            <h2 className="fw-bold text-secondary mt-1 mb-5">PLEASE ADD A PRODUCT</h2>

            {/* <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-100  p-3 form-control">
                <Form.Label>Car name</Form.Label>
                <input className="mb-2 form-control " {...register("name", { required: true, maxLength: 40 })} placeholder="Name" />
                <Form.Label>Car price</Form.Label>
                <input className="mb-2 form-control " type="number" {...register("price", { required: true })} placeholder="Price" />
                <Form.Label>Upload image</Form.Label>
                <input className="mb-2 form-control " type="file" accept="image/*" onChange={handleImgUpload} required placeholder="Image URL" />
                <Form.Label>Description</Form.Label>
                <textarea className="mb-2 form-control " {...register("description", { required: true })} placeholder="Description" />
                <input className="w-75 mx-auto rounded-pill btn btn-danger" type="submit" />
            </form> */}
            {uploading && <CircularProgress></CircularProgress>}

            <div className="" style={{ maxWidth: '700px', margin: 'auto' }}>
                <form onSubmit={handleSubmit(onSubmit)} className=" row form-control py-2 px-5">

                    <TextField className="col-12 col-md-5 me-md-2"
                        label="Product Name"
                        required
                        {...register("name")}
                        variant="standard" />


                    <TextField className="col-12 col-md-5 ms-md-2"
                        label="Product Price"
                        required
                        type="number" {...register("price")}
                        variant="standard" />

                    <TextField className="col-12 col-md-10 mt-5"
                        label="Upload Image"
                        type="file" accept="image/*" onChange={handleImgUpload} required
                        variant="standard" />

                    <Form.Label className="text-start  mt-5">Description</Form.Label>
                    <textarea className="col-12 form-control" style={{ borderRadius: '10px' }} {...register("description", { required: true })} placeholder="Description" variant="standard" />
                    <input className=" mx-auto rounded-pill btn btn-outline-danger mt-2" type="submit" />

                </form>
            </div>

        </div>
    );
};

export default AddProduct;