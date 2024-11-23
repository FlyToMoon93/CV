'use client';

import React from 'react';
import { Container, Typography, Box, Link, IconButton } from '@mui/material';
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';

const Contact = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: '50px',
        backgroundColor: '#f9f9f9',  // Heller, neutraler Hintergrund
        borderRadius: '20px',
        boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.15)', // Eleganterer Schatten für Tiefe
        marginTop: '40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: '700',
          fontFamily: `'Poppins', sans-serif`,
          color: '#333',  // Dunkle Farbe für gute Lesbarkeit
          marginBottom: '30px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        Kontakt
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',  // Zwei Spalten Layout
          gap: 4, // Abstand zwischen den Boxen
          padding: '20px',
        }}
      >
        {/* E-Mail Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            padding: '10px 0',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
            },
          }}
        >
          <IconButton
            href="mailto:itismekhalil93@gmail.com"
            color="primary"
            aria-label="Email"
            sx={{
              '&:hover': {
                color: '#1976d2',  // Leichte Farbeveränderung bei Hover
              },
            }}
          >
            <Email sx={{ fontSize: 40, color: '#1976d2' }} />
          </IconButton>
          <Typography variant="body1" sx={{ color: '#333', fontWeight: '600' }}>
            <Link href="mailto:itismekhalil93@gmail.com" sx={{ color: '#333', textDecoration: 'none' }}>
              itismekhalil93@gmail.com
            </Link>
          </Typography>
        </Box>

        {/* Telefon Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            padding: '10px 0',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
            },
          }}
        >
          <IconButton
            href="tel:015217594065"
            color="primary"
            aria-label="Telefon"
            sx={{
              '&:hover': {
                color: '#1976d2',
              },
            }}
          >
            <Phone sx={{ fontSize: 40, color: '#1976d2' }} />
          </IconButton>
          <Typography variant="body1" sx={{ color: '#333', fontWeight: '600' }}>
            <Link href="tel:015217594065" sx={{ color: '#333', textDecoration: 'none' }}>
              015217594065
            </Link>
          </Typography>
        </Box>

        {/* LinkedIn Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            padding: '10px 0',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
            },
          }}
        >
          <IconButton
            href="https://www.linkedin.com/in/khalil-ibesh-9b4632257/"
            color="primary"
            aria-label="LinkedIn"
            sx={{
              '&:hover': {
                color: '#1976d2',
              },
            }}
          >
            <LinkedIn sx={{ fontSize: 40, color: '#1976d2' }} />
          </IconButton>
          <Typography variant="body1" sx={{ color: '#333', fontWeight: '600' }}>
            <Link href="https://www.linkedin.com/in/khalil-ibesh-9b4632257/" sx={{ color: '#333', textDecoration: 'none' }}>
              Khalil Ibesh
            </Link>
          </Typography>
        </Box>

        {/* GitHub Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            padding: '10px 0',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
            },
          }}
        >
          <IconButton
            href="https://github.com/FlyToMoon93/Projects"
            color="primary"
            aria-label="GitHub"
            sx={{
              '&:hover': {
                color: '#1976d2',
              },
            }}
          >
            <GitHub sx={{ fontSize: 40, color: '#1976d2' }} />
          </IconButton>
          <Typography variant="body1" sx={{ color: '#333', fontWeight: '600' }}>
            <Link href="https://github.com/FlyToMoon93/Projects" sx={{ color: '#333', textDecoration: 'none' }}>
              FlyToMoon93
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
