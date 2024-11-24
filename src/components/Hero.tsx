import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40vh',
  background: 'linear-gradient(135deg, #2b2b2b 0%, #4f4f4f 50%, #1c1c1c 20%)',
  color: '#ffffff',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: '0 20px',
  animation: 'gradientShift 20s ease infinite alternate',
});

const HeroContent = styled(Box)({
  zIndex: 2,
  maxWidth: '700px',
  textAlign: 'center',
});

const HeroTitle = styled(Typography)({
  position: 'absolute',
  bottom: '20px',  // Positioniert den Titel nach unten
  left: '20px',    // Positioniert den Titel nach links
  fontSize: '2.8rem',
  fontWeight: 800,
  textShadow: '3px 3px 10px rgba(0, 0, 0, 0.7)',
  animation: 'fadeInDown 1.5s ease-out',
  lineHeight: 1.2,
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#d3d3d3',
  },
});

const HeroSubtitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginTop: '15px',
  animation: 'fadeIn 2s ease-out',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#a9a9a9',
  },
});

const CTAButton = styled(Button)({
  marginTop: '20px',
  padding: '12px 25px',
  fontSize: '1rem',
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

// Interface für ShowProjects
interface ShowProjects {
  showprojekt: boolean | null;
  toggleProjects: () => void;
}

// Hero-Komponente
const Hero = ({ showprojekt, toggleProjects }: ShowProjects) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Khalil Ibesh</HeroTitle> {/* Name unten links */}
        <HeroSubtitle>😁🤞😒</HeroSubtitle>
        <CTAButton onClick={toggleProjects}>
          {showprojekt ? 'Projekte ausblenden' : 'Projekte ansehen'}
        </CTAButton>
      </HeroContent>

      <Box
        sx={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 1,
          overflow: 'hidden',
          borderRadius: '50%',
          boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.5)',
          transition: 'transform 0.3s ease-out',
          '&:hover': {
            transform: 'scale(1.1) rotate(5deg)',
          },
        }}
      >
        <img
          src="https://raw.githubusercontent.com/FlyToMoon93/CV/37607656361222599f86172ae25ba235cb94a42a/public/profile.jpg"
          alt="Profilbild"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '5px solid #ffffff',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
          }}
        />
      </Box>
    </HeroContainer>
  );
};

export default Hero;
