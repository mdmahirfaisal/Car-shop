import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { TextField, Button } from '@mui/material';
import Swal from 'sweetalert2'



const style = {
    position: 'absolute',
    borderRadius: '20px',
    top: '50%',
    left: '50%',
    border: 'none',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 20,
    p: 4,
};

const ProductsModal = ({ modalOpenPd, pdModalClose, product }) => {
    const [productInfo, seteProductInfo] = useState()

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...productInfo };
        newInfo[field] = value;
        seteProductInfo(newInfo)

    };


    /// handle product submit 
    const handleProductSubmit = (e) => {

        Swal.fire({
            icon: 'success',
            title: 'Yes...',
            text: 'Your order placed successfully',
            footer: ''
        })
        pdModalClose();
        e.preventDefault();
    }



    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalOpenPd}
            onClose={pdModalClose}
            closeAfterTransition
            // BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 400,
            }}
        >
            <Fade in={modalOpenPd}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {product?.name}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={handleProductSubmit}>

                            <TextField onClick={handleOnBlur} style={{ margin: '10px 0' }} fullWidth label="Your name"
                                name="patientName"
                                defaultValue=""
                                id="fullWidth"
                            />
                            <TextField onClick={handleOnBlur} style={{ margin: '10px 0' }} fullWidth label="Your email"
                                name="email"
                                defaultValue="" id="fullWidth"
                            />
                            <TextField onClick={handleOnBlur} style={{ margin: '10px 0' }} fullWidth label="Phone number"
                                name="phone"
                                id="fullWidth"
                            />
                            <TextField style={{ margin: '10px 0' }} disabled fullWidth label="Set date" defaultValue="" id="fullWidth"
                            />
                            <Button variant="contained" type="submit">Send</Button>

                        </form>
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    );
};

export default ProductsModal;