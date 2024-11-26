'use client';

import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import Hero from './Hero';
const headerStyle = {
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '40px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
};

// Stil für den Einführungstext
const introTextStyle = {
  fontSize: '1.15rem',
  lineHeight: '1.8',
  color: '#34495E',
  textAlign: 'justify',
  marginBottom: '30px',
  maxWidth: '900px',
  margin: '0 auto',
};

// Stil für das Zitat
const quoteStyle = {
  fontSize: '1.2rem',
  color: '#7F8C8D',
  fontStyle: 'italic',
  marginBottom: '40px',
};

// Stil für das Grid-Layout der Cards
const gridStyle = {
  marginTop: '40px',
  justifyContent: 'space-between',
};

// Stil für den Bereich der persönlichen Informationen
const infoSectionStyle = {
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Sanfter Schatten
  color: '#34495E', // Dunkelgrauer Text
};

// Stil für die Sprachkenntnisse
const languageSectionStyle = {
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Sanfter Schatten
  color: '#34495E', // Dunkelgrauer Text
};

// Stil für den Titel der persönlichen Informationen und Sprachkenntnisse
const infoTitleStyle = {
  fontWeight: 'bold',
  color: '#1976d2',
  marginBottom: '40px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
};

// Stil für die Liste der persönlichen Informationen
const infoListStyle = {
  listStyleType: 'none',
  paddingLeft: '0',
  fontSize: '1.1rem',
  marginBottom: '20px',
};

// Stil für die Sprachbezeichnung
const languageTitleStyle = {
  fontWeight: 'bold',
  color: '#1976d2',
  marginBottom: '20px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
};

// Stil für den Fortschrittsbalken
const progressBarContainerStyle = {
  width: '100%',
  height: '20px',
  backgroundColor: '#E5E5E5', // Heller Hintergrund für den Fortschrittsbalken
  borderRadius: '10px',
  overflow: 'hidden',
  marginBottom: '15px',
  position: 'relative', // wichtig für die Positionierung des Hover-Texts
};

// Stil für den Fortschrittsbalken
const progressBarStyle = {
  height: '100%',
  backgroundColor: '#C0392B', // Rote Farbe für den Fortschritt
  borderRadius: '10px',
};

// Stil für Hover-Text (beim Überfahren der Balken)
const hoverTextStyle = {
  position: 'absolute',
  top: '-5px',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#1976d2',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '5px 10px',
  borderRadius: '5px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  visibility: 'hidden', // Standardmäßig unsichtbar
};

// Stil für die gesamte Section
const sectionStyle = {
  background: 'linear-gradient(135deg, #f4f7f6 0%, #e0e8f0 100%)',
  padding: '60px 20px',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};
const footerStyle = {
  marginTop: '40px',
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#f7f9fc',
  color: '#34495e',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};
const About = () => {
  return (
    <section id='about' style={sectionStyle}>
      <Hero/>
      {/* Hauptüberschrift */}
      <Typography variant="h3" component="h2" align="center" sx={headerStyle}>
        Über Mich
      </Typography>

      {/* Einführungstext */}
      <Typography variant="body1" sx={introTextStyle}>
        Als leidenschaftlicher Entwickler gehe ich über den reinen Code hinaus und schaffe digitale Erlebnisse,
        die sowohl funktional als auch ästhetisch ansprechend sind. Mit einem klaren Fokus auf innovative Technologien
        und einem Auge für Design verwandle ich Konzepte in interaktive, benutzerfreundliche Webanwendungen, die
        sowohl die Anforderungen der Nutzer als auch die Vision der Kunden widerspiegeln.
      </Typography>

      <Typography variant="h6" align="center" sx={quoteStyle}>
        Kreativität, Präzision und eine tiefe Leidenschaft für den digitalen Raum treiben mich an.
      </Typography>

      {/* Persönliche Informationen */}
      <Grid container spacing={3} sx={gridStyle}>
        <Grid item xs={12} sm={6} sx={infoSectionStyle}>
          <Typography variant="h5" sx={infoTitleStyle}>Persönliche Informationen</Typography>
          <ul style={infoListStyle}>
            <br />
            <li><strong>Geburtsdatum:</strong> 24.10.1993</li>
            <br />
            <li><strong>Geburtsort:</strong> Afrin, Syrien</li>
            <br />
            <li><strong>Familienstand:</strong> Ledig</li>
            <br />
          </ul>
        </Grid>

        {/* Sprachkenntnisse als horizontale Balken */}
        <Grid item xs={12} sm={6} sx={languageSectionStyle}>
          <Typography variant="h5" sx={infoTitleStyle}>Sprachkenntnisse</Typography>
          <Grid container spacing={2}>
            {/* Kurdisch */}
            <Grid item xs={12}>
              <Typography variant="body1" sx={languageTitleStyle}>Kurdisch</Typography>
              <Box
                sx={{
                  ...progressBarContainerStyle,
                  '&:hover .hover-text': {
                    visibility: 'visible',
                  },
                }}
                className="progress-bar"
              >
                <Box sx={{ ...progressBarStyle, width: '100%' }} />
                <Typography
                  variant="body2"
                  className="hover-text"
                  sx={{
                    ...hoverTextStyle,
                    position: 'absolute',
                    visibility: 'hidden',
                  }}
                >
                  Muttersprache
                </Typography>
              </Box>
            </Grid>

            {/* Arabisch */}
            <Grid item xs={12}>
              <Typography variant="body1" sx={languageTitleStyle}>Arabisch</Typography>
              <Box
                sx={{
                  ...progressBarContainerStyle,
                  '&:hover .hover-text': {
                    visibility: 'visible',
                  },
                }}
                className="progress-bar"
              >
                <Box sx={{ ...progressBarStyle, width: '100%' }} />
                <Typography
                  variant="body2"
                  className="hover-text"
                  sx={{
                    ...hoverTextStyle,
                    position: 'absolute',
                    visibility: 'hidden',
                  }}
                >
                  Muttersprache
                </Typography>
              </Box>
            </Grid>

            {/* Deutsch */}
            <Grid item xs={12}>
              <Typography variant="body1" sx={languageTitleStyle}>Deutsch</Typography>
              <Box
                sx={{
                  ...progressBarContainerStyle,
                  '&:hover .hover-text': {
                    visibility: 'visible',
                  },
                }}
                className="progress-bar"
              >
                <Box sx={{ ...progressBarStyle, width: '90%' }} />
                <Typography
                  variant="body2"
                  className="hover-text"
                  sx={{
                    ...hoverTextStyle,
                    position: 'absolute',
                    visibility: 'hidden',
                  }}
                >
                  Fließend
                </Typography>
              </Box>
            </Grid>

            {/* Englisch */}
            <Grid item xs={12}>
              <Typography variant="body1" sx={languageTitleStyle}>Englisch</Typography>
              <Box
                sx={{
                  ...progressBarContainerStyle,
                  '&:hover .hover-text': {
                    visibility: 'visible',
                  },
                }}
                className="progress-bar"
              >
                <Box sx={{ ...progressBarStyle, width: '85%' }} />
                <Typography
                  variant="body2"
                  className="hover-text"
                  sx={{
                    ...hoverTextStyle,
                    position: 'absolute',
                    visibility: 'hidden',
                  }}
                >
                  Fließend
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;