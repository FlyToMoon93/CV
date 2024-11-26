'use client'; // <-- Diese Zeile bleibt oben im Dateikopf

import React from 'react';
import { Typography, Card, CardContent, Chip, Tooltip } from '@mui/material';
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';

const Contact = () => {
  return (
    <section id="kontakt" style={sectionStyle}>
      <div style={contentStyle}>
        <Typography variant="h3" component="h2" align="center" style={headerStyle}>
          Kontakt
        </Typography>

        {/* E-Mail Box */}
        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="h5" style={titleStyle}>E-Mail</Typography>
            <Typography variant="body1" style={contentText}>
              <strong>Email-Adresse:</strong> itismekhalil93@gmail.com
            </Typography>
            <Tooltip title="E-Mail Kontakt">
              <a href="mailto:itismekhalil93@gmail.com" style={chipLinkStyle}>
                <Chip 
                  label="E-Mail" 
                  icon={<Email sx={iconStyle} />} 
                  sx={chipStyle} 
                />
              </a>
            </Tooltip>
          </CardContent>
        </Card>

        {/* Telefon Box */}
        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="h5" style={titleStyle}>Telefon</Typography>
            <Typography variant="body1" style={contentText}>
              <strong>Telefonnummer:</strong> +49 152 17594065
            </Typography>
            <Tooltip title="Telefon Kontakt">
              <a href="tel:+4915217594065" style={chipLinkStyle}>
                <Chip 
                  label="Telefon" 
                  icon={<Phone sx={iconStyle} />} 
                  sx={chipStyle} 
                />
              </a>
            </Tooltip>
          </CardContent>
        </Card>

        {/* LinkedIn Box */}
        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="h5" style={titleStyle}>LinkedIn</Typography>
            <Typography variant="body1" style={contentText}>
              <strong>Profil:</strong> LinkedIn Profil 
            </Typography>
            <Tooltip title="LinkedIn Profil">
              <a href="https://www.linkedin.com/in/khalil-ibesh-9b4632257/" target="_blank" rel="noopener noreferrer" style={chipLinkStyle}>
                <Chip 
                  label="LinkedIn" 
                  icon={<LinkedIn sx={iconStyle} />} 
                  sx={chipStyle} 
                />
              </a>
            </Tooltip>
          </CardContent>
        </Card>

        {/* GitHub Box */}
        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="h5" style={titleStyle}>GitHub</Typography>
            <Typography variant="body1" style={contentText}>
              <strong>Profil:</strong> GitHub-Projekte
            </Typography>
            <Tooltip title="GitHub Profil">
              <a href="https://github.com/FlyToMoon93/Projects" target="_blank" rel="noopener noreferrer" style={chipLinkStyle}>
                <Chip 
                  label="GitHub" 
                  icon={<GitHub sx={iconStyle} />} 
                  sx={chipStyle} 
                />
              </a>
            </Tooltip>
          </CardContent>
        </Card>

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
  color: '#333', // Dunklere Schriftfarbe für besseren Kontrast
  marginBottom: '40px',
  fontSize: '1.5rem', // Größere Schrift auf größeren Bildschirmen

};

const cardStyle = {
  marginBottom: '30px',
  borderRadius: '12px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', // Subtile Schatten für einen modernen Look
  backgroundColor: '#ffffff', // Heller Hintergrund für die Karten
  padding: '20px',
};
const titleStyle = {
  fontWeight: 'bold',
  fontSize: '1.0rem',
  color: '#1976d2', // Klare, kräftige Farbe für die Titel
};

const contentText = {
  marginBottom: '20px',
  fontSize: '16px',
  color: '#555', // Dunklere Schrift für bessere Lesbarkeit
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
  alignItems: 'center', 
  padding: '8px 12px',
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: '#1565c0',
  },
};

const chipLinkStyle = {
  textDecoration: 'none',
};

const iconStyle = {
  fontSize: '20px',
  marginRight: '8px',
};

export default Contact;
