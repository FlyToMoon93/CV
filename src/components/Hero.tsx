'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

// Custom Styled Components for Creativity
const HeroContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40vh',  // Reduzierte Höhe
  background: 'linear-gradient(135deg, #2b2b2b 0%, #4f4f4f 50%, #1c1c1c 100%)',
  color: '#ffffff',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: '0 20px',  // Weniger Padding
  animation: 'gradientShift 20s ease infinite alternate',
});

const HeroContent = styled(Box)({
  zIndex: 2,
  maxWidth: '700px', // Weniger Breite für das Content-Bereich
  textAlign: 'center', // Text zentriert
});

const HeroTitle = styled(Typography)({
  fontSize: '2.8rem',  // Kleinere Schriftgröße
  fontWeight: 800,
  textShadow: '3px 3px 10px rgba(0, 0, 0, 0.7)',
  animation: 'fadeInDown 1.5s ease-out',
  lineHeight: 1.2,
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#d3d3d3',  // Helles Grau für Hover
  },
});

const HeroSubtitle = styled(Typography)({
  fontSize: '1.5rem',  // Kleinere Schriftgröße
  fontWeight: 400,
  marginTop: '15px',
  animation: 'fadeIn 2s ease-out',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#a9a9a9', // Helles Grau für den Hover-Effekt
  },
});

const CTAButton = styled(Button)({
  marginTop: '20px',  // Weniger Abstand
  padding: '12px 25px',  // Weniger Padding
  fontSize: '1rem',  // Kleinere Schriftgröße
  color: '#ffffff',
  backgroundColor: '#555555',
  borderRadius: '30px',
  textTransform: 'none',
  fontWeight: 'bold',
  transition: 'background-color 0.3s, transform 0.3s',
  boxShadow: '0px 10px 20px rgba(85, 85, 85, 0.5)',
  '&:hover': {
    backgroundColor: '#666666',
    transform: 'scale(1.1)',
    boxShadow: '0px 15px 30px rgba(100, 100, 100, 0.7)',
  },
});

const HeroImageWrapper = styled(Box)({
  position: 'absolute',
  top: '10px',   // Bild nach oben verschieben
  left: '10px',  // Bild nach links verschieben
  zIndex: 1,
  overflow: 'hidden',
  borderRadius: '50%',
  boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.5)',
  transition: 'transform 0.3s ease-out',
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
  },
});

const HeroImage = styled('img')({
  width: '250px',  // Kleinere Bildgröße
  height: '250px',
  borderRadius: '50%',
  objectFit: 'cover',
  animation: 'fadeInUp 1.5s ease-out',
  border: '5px solid #ffffff',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
});

// Keyframes for Animations
const keyframes = `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes fadeInDown {
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  @keyframes gradientShift {
    0% { background: linear-gradient(135deg, #2b2b2b 0%, #4f4f4f 50%, #1c1c1c 100%); }
    25% { background: linear-gradient(135deg, #4f4f4f 0%, #2b2b2b 50%, #1c1c1c 100%); }
    50% { background: linear-gradient(135deg, #1c1c1c 0%, #2b2b2b 50%, #4f4f4f 100%); }
    75% { background: linear-gradient(135deg, #2b2b2b 0%, #1c1c1c 50%, #4f4f4f 100%); }
    100% { background: linear-gradient(135deg, #4f4f4f 0%, #2b2b2b 50%, #1c1c1c 100%); }
  }
`;

// Inject Keyframes Styles into Global Style
const GlobalStyles = styled('style')({});

const Hero = () => {
  return (
    <HeroContainer>
      {/* Inject Keyframes */}
      <GlobalStyles>{keyframes}</GlobalStyles>

      <HeroContent>
        <HeroTitle>Khalil Ibesh</HeroTitle>
        <HeroSubtitle>Frontend Entwickler & Kreativer Denker</HeroSubtitle>
        <CTAButton href="#projects">Meine Projekte ansehen</CTAButton>
      </HeroContent>
      
      {/* Profile Image */}
      <HeroImageWrapper>
        <HeroImage src="/profile.jpg" alt="Profilbild" />
      </HeroImageWrapper>
    </HeroContainer>
  );
};

export default Hero;
