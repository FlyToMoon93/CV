'use client';  // Mark as a client component for React hooks

import React, { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  Slide,
  useScrollTrigger,
  Divider,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

// Custom hook to trigger animation on scroll
function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide in={!trigger} timeout={400}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Handle menu toggle for mobile
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        sx={{
          background: 'linear-gradient(90deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)', // Gradient color
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Typography variant="h4" sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '28px', cursor: 'pointer' }}>
            Khalil Ibesh
          </Typography>

          {/* Desktop Navbar Items */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            <Button
              sx={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '16px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Link href="#about" passHref>Über Mich</Link>
            </Button>
            <Button
              sx={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '16px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Link href="#projects" passHref>Projekte</Link>
            </Button>
            <Button
              sx={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '16px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Link href="#resume" passHref>Lebenslauf</Link>
            </Button>
            <Button
              sx={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '16px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Link href="#contact" passHref>Kontakt</Link>
            </Button>
          </Box>

          {/* Mobile Menu Toggle */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={handleMenuOpen}
          >
            <MenuIcon sx={{ color: '#FFFFFF' }} />
          </IconButton>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                backgroundColor: '#3a1c71',  // Darker background for the mobile menu
                color: 'white',
                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                padding: '10px',
              },
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link href="#about" passHref>Über Mich</Link>
            </MenuItem>
            <Divider light />
            <MenuItem onClick={handleMenuClose}>
              <Link href="#projects" passHref>Projekte</Link>
            </MenuItem>
            <Divider light />
            <MenuItem onClick={handleMenuClose}>
              <Link href="#resume" passHref>Lebenslauf</Link>
            </MenuItem>
            <Divider light />
            <MenuItem onClick={handleMenuClose}>
              <Link href="#contact" passHref>Kontakt</Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
