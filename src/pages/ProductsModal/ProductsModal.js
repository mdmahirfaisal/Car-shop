import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

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



    return (
        <Modal sx
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalOpenPd}
            onClose={pdModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 400,
            }}
        >
            <Fade in={modalOpenPd}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {product.name}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        {product.description}
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    );
};

export default ProductsModal;