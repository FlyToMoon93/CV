'use client';  // <-- Add this line at the top of your file

import React from 'react';
import { Container, Typography, Box, Link, IconButton } from '@mui/material';
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';

const Contact = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        padding: '50px',
        backgroundColor: '#fff',  // Heller, neutraler Hintergrund
        borderRadius: '15px',
        boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)', // Elegante Schatten
        marginTop: '40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: '700',
          fontFamily: `'Poppins', sans-serif`,
          color: '#333',  // Dunkle Farbe für gute Lesbarkeit
          marginBottom: '20px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        Kontakt
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          padding: '20px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, transition: 'transform 0.3s' }}>
          <IconButton
            href="mailto:itismekhalil93@gmail.com"
            color="primary"
            aria-label="Email"
            sx={{
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease-out',
              },
            }}
          >
            <Email sx={{ fontSize: 35, color: '#333' }} />
          </IconButton>
          <Typography variant="body1" sx={{ color: '#333', fontWeight: '500' }}>
            Email: <Link href="mailto:itismekhalil93@gmail.com" sx={{ color: '#333', textDecoration: 'none' }}>itismekhalil93@gmail.com</Link>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            href="tel:015217594065"
            color="primary"
            aria-label="Telefon"
            sx={{
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease-out',
              },
            }}
          >
            <Phone sx={{ fontSize: 35, color: '#333' }} />
          </IconButton>
          <Typography variant="body1" sx={{ color: '#333', fontWeight: '500' }}>
            Telefon: <Link href="tel:015217594065" sx={{ color: '#333', textDecoration: 'none' }}>015217594065</Link>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            href="https://www.linkedin.com/in/khalil-ibesh-9b4632257/"
            color="primary"
            aria-label="LinkedIn"
            sx={{
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease-out',
              },
            }}
          >
            <LinkedIn sx={{ fontSize: 35, color: '#333' }} />
          </IconButton>
          <Typography variant="body1" sx={{ color: '#333', fontWeight: '500' }}>
            LinkedIn: <Link href="https://www.linkedin.com/in/khalil-ibesh-9b4632257/" sx={{ color: '#333', textDecoration: 'none' }}>Khalil Ibesh</Link>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            href="https://github.com/FlyToMoon93/Projects"
            color="primary"
            aria-label="GitHub"
            sx={{
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease-out',
              },
            }}
          >
            <GitHub sx={{ fontSize: 35, color: '#333' }} />
          </IconButton>
          <Typography variant="body1" sx={{ color: '#333', fontWeight: '500' }}>
            GitHub: <Link href="https://github.com/FlyToMoon93/Projects" sx={{ color: '#333', textDecoration: 'none' }}>FlyToMoon93</Link>
          </Typography>
        </Box>
      </Box>

      {/* Optional: Minimalistische, transparente Überlagerung */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.7)',  // Leichte Überlagerung
          zIndex: -1,
          borderRadius: '15px',
        }}
      />
    </Container>
  );
};

export default Contact;
