'use client';

import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { Box, Container } from '@mui/material'; 
import Header from '@/components/Header';
import Content from '@/components/Content';
import MyInfo from '@/components/MyInfo';



const Home = () => {
  // Zustand für das Anzeigen der Projekte
  const [showProjects, setShowProjects] = useState<boolean | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null); // Zustand für den aktiven Abschnitt

  // Hintergrund beim Laden setzen
  useEffect(() => {
    document.body.style.background = getRandomGradientBackground();

    const interval = setInterval(() => {
      document.body.style.background = getRandomGradientBackground();
    }, 10000); // Alle 10 Sekunden wird der Hintergrund geändert

    return () => clearInterval(interval); // Aufräumen des Intervalls
  },[]);

  // Funktion zum Erstellen eines kreativen und zufälligen dunklen Farbverlaufs
  const getRandomGradientBackground = () => {
    const randomColor1 = getRandomDarkHSLColor();
    const randomColor2 = getRandomDarkHSLColor();
    const randomColor3 = getRandomDarkHSLColor();
    return `linear-gradient(135deg, ${randomColor1}, ${randomColor2}, ${randomColor3})`;
  };

  // Hilfsfunktion zur Generierung einer zufälligen dunklen HSL-Farbe
  const getRandomDarkHSLColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30) + 20;
    const lightness = Math.floor(Math.random() * 20) + 10;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  // Funktion zum Umschalten der Anzeige der Projekte
  const toggleProjects = () => {
    setShowProjects((prev) => !prev);  // Den Wert von showProjects umschalten
  };

  // Funktion, um den Text des Abschnitts anzuzeigen oder auszublenden
  const handleSectionClick = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null); // Wenn der gleiche Abschnitt erneut angeklickt wird, verstecke den Text
    } else {
      setActiveSection(section); // Andernfalls zeige den Text an
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        transition: 'background 1s ease-in-out', // Sanfter Übergang für den Hintergrund
      }}
    >
      {/* Main Content Container */}
      <Container maxWidth="lg" sx={{ paddingY: 4, flexGrow: 1 }}>
        {/* Header (optional) */}
        <Header onSectionChange={handleSectionClick} />

        {/* Übergabe des Zustands und der Funktion an die Hero-Komponente */}
        <Hero showprojekt={showProjects} toggleProjects={toggleProjects} /> 
      {  activeSection &&  <MyInfo currentSection={activeSection} /> }

        {/* Zeige den Content nur, wenn showProjects true ist */}
        {showProjects && <Content />}
      </Container>

    </Box>
  );
};

export default Home;
