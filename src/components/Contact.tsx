'use client'; // <-- Diese Zeile bleibt oben im Dateikopf

import React from 'react';
import { Typography, Box, Chip, Tooltip } from '@mui/material';
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';

const Contact = () => {
  return (
    <section id="kontakt" style={sectionStyle}>
      <div style={contentStyle}>
        <Typography variant="h3" component="h2" align="center" style={headerStyle}>
          Kontakt
        </Typography>
        
        {/* Kontaktmethoden */}
        <div style={contactBoxStyle}>
          <Typography variant="h5" component="h3" style={categoryTitleStyle}>
            Kontaktmöglichkeiten
          </Typography>
          <Box sx={chipContainerStyle}>
            <Tooltip title="E-Mail Kontakt">
              <a href="mailto:itismekhalil93@gmail.com" style={chipLinkStyle}>
                <Chip 
                  label="E-Mail" 
                  icon={<Email sx={iconStyle} />} 
                  sx={chipStyle} 
                />
              </a>
            </Tooltip>
            <Tooltip title="Telefon Kontakt">
              <a href="tel:+4915217594065" style={chipLinkStyle}>
                <Chip 
                  label="Telefon" 
                  icon={<Phone sx={iconStyle} />} 
                  sx={chipStyle} 
                />
              </a>
            </Tooltip>
            <Tooltip title="LinkedIn Profil">
              <a href="https://www.linkedin.com/in/khalil-ibesh-9b4632257/" target="_blank" rel="noopener noreferrer" style={chipLinkStyle}>
                <Chip 
                  label="LinkedIn" 
                  icon={<LinkedIn sx={iconStyle} />} 
                  sx={chipStyle} 
                />
              </a>
            </Tooltip>
          </Box>
        </div>

        {/* Weitere Kontaktinformationen */}
        <div style={contactBoxStyle}>
          <Typography variant="h5" component="h3" style={categoryTitleStyle}>
            In Github 
          </Typography>
          <Box sx={chipContainerStyle}>
            <Tooltip title="GitHub Profil">
              <a href="https://github.com/FlyToMoon93/Projects" target="_blank" rel="noopener noreferrer" style={chipLinkStyle}>
                <Chip 
                  label="FlyToMoon93" 
                  icon={<GitHub sx={iconStyle} />} 
                  sx={chipStyle} 
                />
              </a>
            </Tooltip>
          </Box>
        </div>
      </div>
    </section>
  );
};

// Styles
const sectionStyle = {
  padding: '50px',
  background: 'linear-gradient(135deg, #f4f7f6 0%, #e0e8f0 100%)',
};

const contentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const headerStyle = {
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '40px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
};

const contactBoxStyle = {
  marginBottom: '30px',
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
};

const categoryTitleStyle = {
  fontWeight: 'bold',
  color: '#1976d2',
  marginBottom: '15px',
};

const chipContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '15px',
};

const chipStyle = {
  backgroundColor: '#1976d2',
  color: '#fff',
  fontWeight: 'bold',
  transition: 'transform 0.2s ease-in-out',
  display: 'flex', 
  alignItems: 'center',  // Align text and icon properly
  padding: '8px 12px', // Add padding for better spacing
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: '#1565c0',
  },
};

const chipLinkStyle = {
  textDecoration: 'none', // Remove default underline from links
};

const iconStyle = {
  fontSize: '20px', // Increase the icon size
  marginRight: '8px', // Add margin to separate icon from label
};

export default Contact;
