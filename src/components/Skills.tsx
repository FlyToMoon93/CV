'use client'; // <-- Diese Zeile bleibt oben im Dateikopf

import React from 'react';
import { Typography, Box, Chip, Tooltip } from '@mui/material';
import { SiReact, SiNextdotjs, SiCypress, SiJira, SiAzuredevops, SiBitbucket, SiJson } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { MdWeb } from 'react-icons/md';
import { SiKalilinux } from 'react-icons/si'; // Fügen wir Kali Linux hinzu
import { FaNpm, FaBug } from 'react-icons/fa'; // Fügen wir Nmap und Burp Suite Icons hinzu

const Skills = () => {
  return (
    <section id="skills" style={sectionStyle}>
      <div style={contentStyle}>
        <Typography variant="h3" component="h2" align="center" style={headerStyle}>
          Meine Skills
        </Typography>
        
        {/* Programmiersprachen & Frameworks */}
        <div style={skillBoxStyle}>
          <Typography variant="h5" component="h3" style={categoryTitleStyle}>
            Programmiersprachen & Frameworks
          </Typography>
          <Box sx={chipContainerStyle}>
            <Tooltip title="C Programming Language">
              <Chip label="C" sx={chipStyle} />
            </Tooltip>
            <Tooltip title="Java Programming Language">
              <Chip label="Java" sx={chipStyle} />
            </Tooltip>
            <Tooltip title="JavaScript Programming Language">
              <Chip label="JavaScript" sx={chipStyle} />
            </Tooltip>
            <Tooltip title="ReactJS Framework">
              <Chip label="ReactJS" icon={<SiReact />} sx={chipStyle} />
            </Tooltip>
            <Tooltip title="NextJS Framework">
              <Chip label="NextJS" icon={<SiNextdotjs />} sx={chipStyle} />
            </Tooltip>
          </Box>
        </div>

        {/* Webtechnologien & Tools */}
        <div style={skillBoxStyle}>
          <Typography variant="h5" component="h3" style={categoryTitleStyle}>
            Webtechnologien & Tools
          </Typography>
          <Box sx={chipContainerStyle}>
            <Tooltip title="Webdesign Tools">
              <Chip label="Webdesign" icon={<MdWeb />} sx={chipStyle} />
            </Tooltip>
            <Tooltip title="Webentwicklung Tools">
              <Chip label="Webentwicklung" sx={chipStyle} />
            </Tooltip>
            <Tooltip title="HTML - Strukturierung von Webseiten">
              <Chip label="HTML" sx={chipStyle} />
            </Tooltip>
            <Tooltip title="CSS - Gestaltung von Webseiten">
              <Chip label="CSS" sx={chipStyle} />
            </Tooltip>
            <Tooltip title="React UI - Benutzeroberflächen">
              <Chip label="React UI" sx={chipStyle} />
            </Tooltip>
            <Tooltip title="JSON - Datenformat">
              <Chip label="JSON" icon={<SiJson />} sx={chipStyle} />
            </Tooltip>
          </Box>
        </div>

        {/* Cypress & Testing */}
        <div style={skillBoxStyle}>
          <Typography variant="h5" component="h3" style={categoryTitleStyle}>
            Testing & Automatisierung
          </Typography>
          <Box sx={chipContainerStyle}>
            <Tooltip title="Cypress - End-to-End Testing">
              <Chip label="Cypress" icon={<SiCypress />} sx={chipStyle} />
            </Tooltip>
            <Tooltip title="Jira - Projektmanagement">
              <Chip label="Jira" icon={<SiJira />} sx={chipStyle} />
            </Tooltip>
            <Tooltip title="Azure DevOps - DevOps Platform">
              <Chip label="Azure DevOps" icon={<SiAzuredevops />} sx={chipStyle} />
            </Tooltip>
          </Box>
        </div>

        {/* Weitere Tools & Technologien */}
        <div style={skillBoxStyle}>
          <Typography variant="h5" component="h3" style={categoryTitleStyle}>
            Weitere Tools & Technologien
          </Typography>
          <Box sx={chipContainerStyle}>
            <Tooltip title="Scrum Methodologie">
              <Chip label="Scrum" icon={<DiScrum />} sx={chipStyle} />
            </Tooltip>
            <Tooltip title="Version Control mit Git">
              <Chip label="Git" sx={chipStyle} />
            </Tooltip>
            <Tooltip title="Bitbucket - Git Repository Management">
              <Chip label="Bitbucket" icon={<SiBitbucket />} sx={chipStyle} />
            </Tooltip>
          </Box>
        </div>

        {/* Linux & Tools */}
        <div style={skillBoxStyle}>
          <Typography variant="h5" component="h3" style={categoryTitleStyle}>
            Linux & Tools
          </Typography>
          <Box sx={chipContainerStyle}>
            <Tooltip title="Kali Linux - Penetration Testing Distribution">
              <Chip label="Kali Linux" icon={<SiKalilinux />} sx={chipStyle} />
            </Tooltip>
            <Tooltip title="Nmap - Netzwerkerkennungs-Tool">
              <Chip label="Nmap" icon={<FaNpm />} sx={chipStyle} />
            </Tooltip>
            <Tooltip title="Burp Suite - Sicherheits-Testing-Tool">
              <Chip label="Burp Suite" icon={<FaBug />} sx={chipStyle} />
            </Tooltip>
          </Box>
        </div>
      </div>
    </section>
  );
};

// Styles
const sectionStyle = {
  padding: '50px',
  background: 'linear-gradient(135deg, #f4f7f6 0%, #e0e8f0 100%)',
};

const contentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const headerStyle = {
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '40px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
};

const skillBoxStyle = {
  marginBottom: '30px',
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
};

const categoryTitleStyle = {
  fontWeight: 'bold',
  color: '#1976d2',
  marginBottom: '15px',
};

const chipContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '15px',
};

const chipStyle = {
  backgroundColor: '#1976d2',
  color: '#fff',
  fontWeight: 'bold',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: '#1565c0',
  },
};

export default Skills;
