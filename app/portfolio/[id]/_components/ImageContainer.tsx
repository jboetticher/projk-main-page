'use client'

import { useState } from "react";
import { Box, Grid, IconButton, Modal, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// TODO: turn into a carousel when small

const ImageContainer = ({ images, title }: { title: string, images: string[] }) => {

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => { setOpen(false) };

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {!isXsScreen && <img
        alt={title}
        src={images[0]}
        style={{
          width: '100%', // Makes the image scale to the width of the Grid item
          height: 'auto', // Maintains the aspect ratio of the image
          borderRadius: '16px'
        }}
      />}
      <Grid container spacing={2} style={{ marginTop: '4px' }}>
        {isXsScreen &&
          <Grid item xs={12}>
            <Carousel showThumbs={false} showStatus={false}
              onClickItem={() => { setOpen(true) }}
              onChange={(index) => { setSelectedImage(images[index]) }}
            >
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      maxHeight: '300px'
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </Grid>
        }
        {!isXsScreen && images.slice(1).map((image, index) => ( // Start from the second image
          <Grid item key={index} sm={6} md={4} xl={4} style={{ height: '150px', position: 'relative' }}>
            <img
              src={image}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
              onClick={() => { handleOpen(image) }}
            />
          </Grid>
        ))}
      </Grid >
      <Modal open={open} onClose={handleClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box style={{
          outline: 'none',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              color: 'white', // Sets the color of the "X" icon
              transition: 'transform 0.3s ease', // Smooth transition for the transform
              '&:hover': {
                transform: 'scale(1.2)' // Scales up the icon on hover
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              height: 'auto',
              width: 'auto',
              maxHeight: '90%',
              maxWidth: '90%'
            }}
          />
        </Box>
      </Modal>
    </>
  );

};

export default ImageContainer;