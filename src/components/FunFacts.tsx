'use client';

import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

// Fun Facts Component with auto-changing facts
const FunFacts = () => {
  const funFacts = [
    "Ich benutze Dark Mode... IMMER!",
    "Mein Lieblings-Shortcut: Strg + Z (Rückgängig machen ist meine Superkraft).",
    "Ich habe den Unterschied zwischen `margin` und `padding` erst nach dem 100. Versuch verstanden.",
    "Code, der auf Anhieb funktioniert, macht mich misstrauisch.",
    "Ein Tag ohne ein neues Browser-Tab zu öffnen, ist ein verlorener Tag.",
    "Ich habe einmal einen Fehler behoben, indem ich nichts getan habe... und es hat funktioniert!",
    "Meine größte Angst? Ein unerwartetes `undefined`.",
    "Debuggen ist wie Schach spielen – nur ohne Brett, ohne Regeln und mit mehr Fehlern.",
    "Mein Computer läuft schneller, wenn ich ihn einfach neu starte. (Weiß ich auch nicht, warum.)",
    "CSS ist wie Magie – es funktioniert immer anders, als man denkt.",
    "Die beste Art, ein Problem zu lösen? Einfach den Stack Overflow zu fragen!",
    "Ich bin im Code, was ein Reiseführer für die Städte der Welt ist – immer auf der Suche nach der besten Route.",
    "Ein Tag ohne Commit ist wie ein Tag ohne Lächeln.",
    "Mein Lieblings-Meme? 'It works on my machine'.",
    "Ich benutze JavaScript, um meine Emotionen auszudrücken: 'console.log(\"I'm feeling\")'.",
    "Wenn mein Code funktioniert, fühle ich mich wie ein Programmier-Guru – zumindest für fünf Minuten.",
    "Ich habe mehr Stunden mit Stack Overflow verbracht als mit meiner Familie.",
    "Fehler im Code sind wie verlorene Socken – du findest sie nie wieder.",
    "Ich programmiere in der Hoffnung, dass irgendwann der Code von selbst funktioniert.",
    "Im Gegensatz zu Kaffee funktioniert mein Code nur dann, wenn er frisch und ohne Bugs ist.",
    "Wenn mein Code läuft, feiere ich wie ein Entwickler auf einer Konferenz!",
    "Meine Lieblingsfarbe im Code: grün (grüne Terminal-Ausgaben sind immer ein gutes Zeichen).",
    "Ich habe so viele Code-Versuche gestartet, wie ein Labormensch Versuche startet – nur weniger erfolgreich.",
    "Ein Entwickler, der nie einen Fehler gemacht hat, hat nie etwas Neues ausprobiert.",
    "Ich habe nie genug Zeit für Code, aber immer genug Zeit für Kaffeepausen."
  ];

  // State für den aktuellen Index des angezeigten Fun Facts
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  // Effekt, der das Fun Fact alle 5-10 Sekunden ändert
  useEffect(() => {
    // Hier stellen wir sicher, dass der Intervall richtig gesetzt wird
    const intervalTime = Math.floor(Math.random() * (15 - 10 + 1) + 10) * 1000; // Zufälliges Intervall zwischen 10 und 15 Sekunden

    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % funFacts.length); // sorgt dafür, dass der Index immer im Kreis geht
    }, intervalTime);

    // Cleanup des Intervalls, wenn die Komponente entladen wird
    return () => clearInterval(interval);
  }, []); // Wir brauchen das leer Array, weil wir den Effekt nur einmal ausführen wollen

  return (
    <section>
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          height: '120px', // Höhe der Box angepasst, um kleiner zu sein
          width: '100%', // Breite ist auf 100% gesetzt
          maxWidth: '900px', // Maximale Breite der Box
          backgroundColor: '#f4f6f8',
          padding: '10px 20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          margin: '0 auto', // Zentriert die Box
        }}
      >
        <Typography 
          variant="h6" 
          sx={{
            color: '#000',
            fontSize: '1rem',
            fontWeight: 'bold',
            lineHeight: '1.6',
            transition: 'color 0.3s ease-in-out',
            '&:hover': {
              color: '#0073e6',
            },
          }}
        >
          {funFacts[currentFactIndex]}
        </Typography>
      </Box>
    </section>
  );
};

export default FunFacts;
