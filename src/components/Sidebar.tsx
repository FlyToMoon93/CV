'use client';

import React from 'react';
import Link from 'next/link';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Button,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) => {
  return (
    <>
      {/* Icon to open the sidebar */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleSidebar}
        sx={{
          position: 'fixed',
          top: 20,
          left: 20,
          zIndex: 1300,
          fontSize: '30px',
          color: '#FFFFFF'
        }}
      >
        <MenuIcon sx={{ fontSize: 30, color: '#FFFFFF' }} />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleSidebar}
        PaperProps={{
          sx: {
            width: 280,
            background: 'linear-gradient(135deg, #333333 0%, #555555 100%)',
            color: 'white',
            borderRadius: '15px 0 0 15px', // Abgerundete Ecken
            boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.3)',
            padding: '20px',
            transition: 'all 0.3s ease',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            Navigation
          </Typography>
          <IconButton onClick={toggleSidebar} sx={{ color: '#FFFFFF' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.3)', marginBottom: 2 }} />

        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleSidebar}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  padding: '12px',
                  borderRadius: '10px',
                  transition: 'background-color 0.3s, transform 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                <Link href="#about" passHref>Über Mich</Link>
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleSidebar}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  padding: '12px',
                  borderRadius: '10px',
                  transition: 'background-color 0.3s, transform 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                <Link href="#projects" passHref>Projekte</Link>
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleSidebar}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  padding: '12px',
                  borderRadius: '10px',
                  transition: 'background-color 0.3s, transform 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                <Link href="#resume" passHref>Lebenslauf</Link>
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleSidebar}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  padding: '12px',
                  borderRadius: '10px',
                  transition: 'background-color 0.3s, transform 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                <Link href="#contact" passHref>Kontakt</Link>
              </Button>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
