'use client';

import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Box } from '@mui/material'; 
import Header from '@/components/Header';
import Content from '@/components/Content';
import MyInfo from '@/components/MyInfo';

// Home-Komponente
const Home = () => {
  // Zustand für das Anzeigen der Projekte
  const [showProjects, setShowProjects] = useState<boolean | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null); // Zustand für den aktiven Abschnitt

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
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      {/* Hintergrundanimation mit Sternen */}
      <Box sx={{
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: -1, 
        background: 'black', 
        overflow: 'hidden', 
        pointerEvents: 'none'
      }}>
        <Box sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'url("https://www.transparenttextures.com/patterns/stardust.png") repeat', 
          animation: 'moveStars 20s linear infinite',
        }} />
      </Box>

      {/* Main Content Page Layout */}
      <Header onSectionChange={handleSectionClick} showprojekt={showProjects} toggleProjects={toggleProjects} />

      {/* Zeige den Inhalt für den aktiven Abschnitt */}
      {activeSection && <MyInfo currentSection={activeSection} />}

      {/* Zeige den Content nur, wenn showProjects true ist */}
      {showProjects && <Content />}

      {/* Hinzufügen des Rumi-Zitats */}
      { !activeSection &&  <Box sx={{ padding: '20px', textAlign: 'center' }}>
        <h2>Anything you lose comes round in new form. – Rumi</h2>
      </Box> }
    </Box>
  );
};

export default Home;
