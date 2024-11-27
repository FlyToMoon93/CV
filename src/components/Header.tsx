import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

interface HeaderProps {
  onSectionChange: (section: string) => void;
  showprojekt: boolean | null;
  toggleProjects: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSectionChange, showprojekt, toggleProjects }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Abschnitt wechseln
  const handleSectionClick = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
    onSectionChange(section);
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'rgba(44, 62, 80, 0.8)', // Transparent Hintergrund mit einem Hauch von Blau
          backdropFilter: 'blur(10px)', // Unschärfe-Effekt im Hintergrund
          boxShadow: 'none', // Kein harter Schatten
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingX: 2 }}>
          {/* Linke Seite: Lebenslauf */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '24px',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)', // Leichter Textschatten
            }}
          >
            Lebenslauf
          </Typography>

          {/* Rechte Seite: Name und Sidebar-Button */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {/* Name "Khalil Ibesh" */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: '#fff',
                fontSize: '1.2rem',
                textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
              }}
            >
              Khalil Ibesh
            </Typography>

            {/* Sidebar-Button */}
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
              sx={{
                fontSize: '30px',
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '50%',
                padding: '10px',
                transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  transform: 'scale(1.2)',
                },
              }}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>

        {/* Horizontale Menüzeile */}
        {menuOpen && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column', // Vertikale Ausrichtung für kleine Bildschirme
              justifyContent: 'center',
              backgroundColor: 'rgba(52, 152, 219, 0.8)', // Subtile, abgerundete Farbgebung
              paddingY: 1,
              transition: 'all 0.3s ease',
              borderRadius: '10px',
              animation: 'fadeIn 0.5s ease-out', // Animation beim Öffnen des Menüs
              '@media (min-width:600px)': {
                flexDirection: 'row', // Horizontale Ausrichtung für größere Bildschirme
              },
            }}
          >
            {/* Navigationslinks */}
            {['Über Mich', 'Skills', 'Bildungsweg', 'Berufserfahrungen', 'Kontakt','Projekte ansehen','Unterlagen'].map((text, index) => (
              <Button
                key={index}
                sx={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  marginX: 2,
                  padding: '10px 15px',
                  borderRadius: '20px', // Abgerundete Ecken für die Buttons
                  backgroundColor:
                    activeSection === text.toLowerCase() ? '#000' : 'transparent',
                  transition: 'background-color 0.3s ease, transform 0.3s ease, color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(41, 128, 185, 0.6)',
                    color: '#000', // Rote Farbe bei Hover
                    transform: 'scale(1.05)', // Leichte Skalierung für interaktive Rückmeldung
                  },
                  '&:active': {
                    transform: 'scale(0.98)', // Beim Klicken wird der Button etwas kleiner
                  },
                }}
                onClick={() => handleSectionClick(text.toLowerCase())}
              >
                {text}
              </Button>
            ))}

          </Box>
        )}
      </AppBar>
    </div>
  );
};

export default Header;
