'use client';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Box, Container } from '@mui/material'; // Container für den zentralen Wrapper

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Container (this will take 100% height of the screen) */}
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',  // Ensures content is evenly distributed and footer stays at the bottom
          marginLeft: sidebarOpen ? '250px' : '0px', // Shifts content when sidebar is open
          transition: 'margin-left 0.3s ease',
          flexGrow: 1,
          height: '100vh',  // This ensures the entire page fills the screen
        }}
      >
        {/* Central Container to wrap all sections */}
        <Container maxWidth="lg" sx={{ paddingY: 4, flexGrow: 1 }}>
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Projects Section */}
          <Projects />

          {/* Resume Section */}
          <Resume />

          {/* Contact Section */}
          <Contact />
        </Container>

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
