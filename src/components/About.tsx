'use client'; // <-- Diese Zeile bleibt oben im Dateikopf

import React from 'react';
import { Typography } from '@mui/material';

const About = () => {
  return (
    <section id="about" className="about" style={{ backgroundColor: '#f4f7f6', padding: '50px 20px', borderRadius: '8px' }}>
      <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h3" component="h2" align="center" style={headerStyle}>
          Über mich
        </Typography>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#34495E', textAlign: 'justify', marginBottom: '30px' }}>
          Als leidenschaftlicher Frontend-Entwickler gehe ich über den reinen Code hinaus und schaffe digitale Erlebnisse,
          die sowohl funktional als auch ästhetisch ansprechend sind. Mit einem klaren Fokus auf innovative Technologien
          und einem Auge für Design verwandle ich Konzepte in interaktive, benutzerfreundliche Webanwendungen, die
          sowohl die Anforderungen der Nutzer als auch die Vision meiner Kunden widerspiegeln.
        </p>
        <p style={{ fontSize: '1rem', color: '#7F8C8D', textAlign: 'center' }}>
          Kreativität, Präzision und eine tiefe Leidenschaft für den digitalen Raum treiben mich an.
        </p>
        
        {/* Zusätzliche Informationen */}
        <div style={additionalInfoStyle}>
          <h3 style={infoTitleStyle}>Persönliche Informationen</h3>
          <ul style={infoListStyle}>
            <li><strong>Geburtsdatum:</strong> 24.10.1993</li>
            <li><strong>Geburtsort:</strong> Afrin, Syrien</li>
            <li><strong>Familienstand:</strong> Ledig</li>
            <li><strong>Seit 2014 in Deutschland</strong></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const additionalInfoStyle = {
  background: 'linear-gradient(145deg, #ffffff, #f1f1f1)', // Farbverlauf für den Hintergrund
  padding: '30px',
  borderRadius: '12px', // Rundere Ecken
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', // Subtiler Schatten für modernen Look
  marginTop: '30px',
  border: '1px solid #ddd', // Dünner Rand für visuelle Trennung
};

const infoTitleStyle = {
  fontSize: '1.8rem', // Größere Schrift für den Titel
  color: '#2C3E50',
  marginBottom: '15px',
  fontWeight: '600', // Etwas stärkeres Gewicht für den Titel
};

const infoListStyle = {
  listStyleType: 'none',
  paddingLeft: '0',
  fontSize: '1.1rem', // Etwas größere Schrift für die Liste
  color: '#34495E',
  marginBottom: '20px',
};


const headerStyle = {
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '40px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', // Schatten für den Text
};

export default About;
