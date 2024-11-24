'use client';

import React, { useState } from 'react';
import Hero from '../components/Hero';
import { CardContent, Container } from '@mui/material'; 
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
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'black', // Hintergrund auf Schwarz setzen
      }}
    >
      {/* Main Content Container */}
      <Container maxWidth="lg" sx={{ paddingY: 4, flexGrow: 1 }}>
        {/* Header (optional) */}
        <Header onSectionChange={handleSectionClick} />

        {/* Übergabe des Zustands und der Funktion an die Hero-Komponente */}
        <Hero showprojekt={showProjects} toggleProjects={toggleProjects} /> 
        {activeSection && <MyInfo currentSection={activeSection} />}

        {/* Zeige den Content nur, wenn showProjects true ist */}
        {showProjects && <Content />}
      </Container>
    </CardContent>
  );
};

export default Home;
