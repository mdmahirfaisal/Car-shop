import { TextField, Button } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import Rating from '@mui/material/Rating';

import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};



const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const [rateValue, setRateValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const [userImg, setUserImg] = React.useState(null)
    console.log(rateValue, userImg);


    // handle image upload 

    const handleImgUpload = async e => {
        const imageData = new FormData();
        console.log(e.target.files[0]);
        imageData.set('key', 'b1329658ac9cd12416e1b24f8e686347');
        await imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(response => {
                console.log(response.data.data.display_url);

                setUserImg(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    };

    // send data to database
    const onSubmit = reviewData => {
        const data = {
            name: reviewData.name,
            email: reviewData.email,
            address: reviewData.address,
            description: reviewData.description,
            img: userImg,
            ratings: rateValue
        };

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
            <div className="bg-light shadow px-4 py-5 mt-sm-4 mx-auto" style={{ borderRadius: "15px", maxWidth: '700px' }}>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-100 h-100 ">

                    <TextField className="" variant="standard" placeholder="Name" fullWidth type="text" {...register("name", { required: true, maxLength: 40 })} label="Name" defaultValue={user?.displayName || ''} /> <br /><br />

                    <TextField variant="standard" placeholder="Email" fullWidth type="email" {...register("email", { required: true })} label="Email" defaultValue={user?.email || ''} /> <br /> <br />

                    <TextField variant="standard" fullWidth {...register("address")} label="Address" /> <br />

                    <div className="d-flex align-items-center">
                        <Box
                            className="w-50"
                        >
                            {rateValue !== null && (
                                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rateValue]}</Box>
                            )}
                            <Rating
                                className="fs-1 mt-2"
                                name="hover-feedback"
                                value={rateValue}
                                precision={0.5}
                                onChange={(event, newValue) => {
                                    setRateValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />

                        </Box>
                        <TextField className=" w-50"
                            label="Upload Image"
                            type="file" accept="image/*" onChange={handleImgUpload} required
                            variant="standard" />
                    </div>

                    <textarea placeholder="Description" className="form-control"  {...register("description")} /> <br /> <br />

                    <Button type="submit" variant="contained" className=" w-100  rounded-pill">Send review</Button>
                </form>
            </div>


        </div>
    );
};

export default AddReview;