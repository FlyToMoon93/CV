'use client';

import React from 'react';

const Unterlagen = () => {
  // Pfad zur PDF-Datei
  const pdfFile = '/documents/Khalil_Unterlagen.pdf';

  return (
    <div
      id="unterlagen"
      style={{
        display: 'flex',
        justifyContent: 'center', // Zentriert das PDF horizontal
        alignItems: 'center', // Zentriert das PDF vertikal
        height: '100vh', // Vollbildhöhe (100% der Viewport-Höhe)
        width: '100vw', // Vollbildbreite (100% der Viewport-Breite)
        margin: 0,
        padding: 0,
        background: '#fff', // Hintergrundfarbe (weiß)
        overflow: 'hidden', // Verhindert, dass das PDF außerhalb des Containers scrollt
      }}
    >
      <embed
        src={pdfFile}
        type="application/pdf"
        style={{
          width: '100%', // Die Breite des PDF-Viewers auf 100% setzen
          height: '100%', // Die Höhe des PDF-Viewers auf 100% setzen
          maxWidth: '100%', // Maximale Breite auf 100% setzen
          maxHeight: '100%', // Maximale Höhe auf 100% setzen
          border: 'none', // Kein Rand
          objectFit: 'contain', // Skaliert das PDF, um den gesamten Container zu füllen und es auf verschiedenen Bildschirmgrößen zu passen
        }}
        title="Meine Unterlagen"
      />
    </div>
  );
};

export default Unterlagen;
