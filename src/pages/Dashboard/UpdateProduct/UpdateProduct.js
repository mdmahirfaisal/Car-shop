import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2'
import { Button } from '@mui/material';
import InputUnstyled from '@mui/core/InputUnstyled';

import { useForm } from 'react-hook-form';

// import useAuth from '../../../hooks/useAuth';
import { styled } from '@mui/system';


const StyledInputElement = styled('input')`
  width: 100%;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 2.4375em;
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





const UpdateProduct = () => {
    const [updateProduct, setUpdateProduct] = useState([]);
    const { updateId } = useParams();
    // const { admin } = useAuth();
    const { register, handleSubmit, reset } = useForm();


    useEffect(() => {
        fetch(`https://lit-citadel-97865.herokuapp.com/products/${updateId}`)
            .then(res => res.json())
            .then(data => setUpdateProduct(data))
            .catch(error => Swal.fire({
                position: 'top-middle',
                icon: 'error',
                title: `Set to ${error}`,
                showConfirmButton: false,
                timer: 3000
            }))
    }, [updateId]);


    const { name, img, price, description } = updateProduct;
    console.log(name, img, price);

    const handleProductUpdate = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className="container">
            <div className="shadow px-4 pt-2 my-3" style={{ borderRadius: "15px" }}>
                <form onSubmit={handleSubmit(handleProductUpdate)} className="d-flex flex-column w-100 h-100  p-3 ">

                    <InputUnstyled placeholder="Product name" {...register("name")} defaultValue={name} components={{ Input: StyledInputElement }} /> <br />
                    <InputUnstyled placeholder="Product price" {...register("price")} defaultValue={price} components={{ Input: StyledInputElement }} /> <br />
                    <InputUnstyled placeholder="Image URL" {...register("img")} defaultValue={img} components={{ Input: StyledInputElement }} /> <br />
                    <InputUnstyled placeholder="Description" {...register("description")} defaultValue={description} components={{ Input: StyledInputElement }} /> <br />

                    <Button style={{ borderRadius: "10px", padding: '10px 0' }} type="submit" variant="contained" className="">Update Product</Button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;