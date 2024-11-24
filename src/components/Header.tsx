import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

interface HeaderProps {
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSectionChange }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null); // Zustand für den aktiven Abschnitt

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Funktion, um den Text des Abschnitts anzuzeigen oder auszublenden
  const handleSectionClick = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null); // Wenn der gleiche Abschnitt erneut angeklickt wird, entferne die Farbe
    } else {
      setActiveSection(section); // Andernfalls setze diesen Abschnitt als aktiv
    }
    onSectionChange(section); // Wechselt den Abschnitt
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#2c3e50' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingX: 2 }}>
          {/* Left side: Lebenslauf */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff'}}>
            Lebenslauf
          </Typography>
          {/* Right side: Sidebar-Button */}
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{
              fontSize: '30px',
              color: '#FFFFFF',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '50%',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
            }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>

        {/* Horizontale Menüzeile */}
        {menuOpen && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#34495e',
              paddingY: 1,
              transition: 'all 0.3s ease',
            }}
          >
            {/* Navigationslinks */}
            {['Über Mich', 'Skills', 'Bildungsweg', 'Berufserfahrungen', 'Kontakt'].map((text, index) => (
              <Button
                key={index}
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  marginX: 2,
                  backgroundColor: activeSection === text.toLowerCase() ? '#2980b9' : 'transparent', // Aktive Sektion hat eine andere Farbe
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
                onClick={() => handleSectionClick(text.toLowerCase())} // Wechselt die Sektion und zeigt den Text
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
