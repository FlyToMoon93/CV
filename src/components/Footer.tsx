// components/Footer.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Container component="footer" style={{ padding: '20px 0', backgroundColor: '#333', color: '#fff' }}>
      <Grid container justifyContent="center">
        <Typography variant="body1" align="center">
          © 2024 Kreative Webseite. Alle Rechte vorbehalten.
        </Typography>
      </Grid>
    </Container>
  );
};

export default Footer;
