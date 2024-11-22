'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Box, Container } from '@mui/material'; 
import Header from '@/components/Header';
import Content from '@/components/Content';

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      document.body.style.background = getRandomGradientBackground();
    }, 5000); // Alle 5 Sekunden wird der Hintergrund geändert
    return () => clearInterval(interval); // Aufräumen der Intervalle
  }, []);

  // Funktion zum Erstellen eines kreativen und zufälligen Farbverlaufs
  const getRandomGradientBackground = () => {
    const randomColor1 = getRandomHSLColor();
    const randomColor2 = getRandomHSLColor();
    const randomColor3 = getRandomHSLColor();
    
    // Erstellen eines einzigartigen Farbverlaufs mit Übergängen
    return `linear-gradient(135deg, ${randomColor1}, ${randomColor2}, ${randomColor3})`;
  };

  // Hilfsfunktion zur Generierung einer zufälligen HSL-Farbe
  const getRandomHSLColor = () => {
    const hue = Math.floor(Math.random() * 360); // Zufälliger Farbton (0-360)
    const saturation = Math.floor(Math.random() * 60) + 40; // Sättigung (40%-100%)
    const lightness = Math.floor(Math.random() * 40) + 30; // Helligkeit (30%-70%)
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        transition: 'background 1s ease-in-out',  // Sanfter Übergang für den Hintergrund
      }}
    >
      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Container */}
     
        {/* Central Container to wrap all sections */}
        <Container maxWidth="lg" sx={{ paddingY: 4, flexGrow: 1 }}>
          {/* Hero Section */}
          <Header />
          <Hero />
          <Content />
        </Container>
      
    </Box>
  );
};

export default Home;
