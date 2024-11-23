'use client';

import React from 'react';
import { Container, Typography, Box, IconButton, Tooltip } from '@mui/material';
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';

const Contact = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: '40px 20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '20px',
        boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.1)',
        marginTop: '30px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 15px 50px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: '700',
          fontFamily: `'Poppins', sans-serif`,
          color: '#333',
          marginBottom: '20px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        Kontakt
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
          padding: '10px 0',
        }}
      >
        {[ 
          { label: 'E-Mail', href: 'mailto:itismekhalil93@gmail.com', icon: <Email />, text: 'itismekhalil93@gmail.com' },
          { label: 'Telefon', href: 'tel:015217594065', icon: <Phone />, text: '015217594065' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khalil-ibesh-9b4632257/', icon: <LinkedIn />, text: 'Khalil Ibesh' },
          { label: 'GitHub', href: 'https://github.com/FlyToMoon93/Projects', icon: <GitHub />, text: 'FlyToMoon93' },
        ].map(({ label, href, icon, text }) => (
          <Box
            key={label}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              padding: '12px 16px',
              borderRadius: '10px',
              backgroundColor: '#fff',
              transition: 'transform 0.3s, background-color 0.3s, box-shadow 0.3s',
              textDecoration: 'none',
              '&:hover': {
                transform: 'translateY(-5px)',
                backgroundColor: '#e0e0e0', // Sanfte, gut lesbare Hover-Farbe
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              },
              cursor: 'pointer', // Sicherstellen, dass die Box klickbar ist
            }}
            component="a" // Die gesamte Box klickbar machen
            href={href} // Der Link wird auch für die gesamte Box gelten
          >
            <Tooltip title={label} placement="top">
              <IconButton
                color="primary"
                aria-label={label}
                sx={{
                  '&:hover': {
                    color: '#1976d2', // Standardfarbe des Icons
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {icon}
              </IconButton>
            </Tooltip>
            <Typography
              variant="body2"
              sx={{
                color: '#333',
                fontWeight: '500',
                textDecoration: 'none', // Keine Unterstreichung
              }}
            >
              {text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Contact;
