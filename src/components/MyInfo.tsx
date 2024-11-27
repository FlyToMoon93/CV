import { Grid,Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import AboutMe from './About';  // Import der AboutMe-Komponente
import Education from './Education'; // Import der Education-Komponente
import WorkExperience from './WorkExperience'; // Import der WorkExperience-Komponente
import Skills from './Skills';
import Contact from './Contact';
import Content from './Content';
import Unterlagen from './Unterlagen';

const useStyles = makeStyles(() => ({
  root: {
    background: '#fff',
    minHeight: '100vh',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    paddingLeft: '30px',
    background: '#fff',
    borderRadius: '10px',
    maxWidth: '1100px', 
    width: '100%',
    display: 'flex',          // Flexbox hinzufügen
    justifyContent: 'center', // Vertikal zentrieren
    alignItems: 'center',    // Horizontal zentrieren
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 345,
    borderRadius: '15px',
    overflow: 'hidden',
    marginTop:'20px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', 
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.3)', 
    },
    height: '100%',
  },
  colorBox: {
    height: 220,
    background: 'linear-gradient(135deg, #ff7e5f, #feb47b)', 
    transition: 'opacity 0.3s, transform 0.3s',
    '&:hover': {
      opacity: 0.85,
      transform: 'scale(1.05)', 
    },
  },
  cardContent: {
    padding: '20px',
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    textAlign: 'center',
  },
  title: {
    fontFamily: `'Roboto Slab', serif`,
    fontWeight: 700,
    fontSize: '1.6rem',
    color: '#fff',
    letterSpacing: '1px', 
    marginBottom: '10px',
  },
  description: {
    fontFamily: `'Open Sans', sans-serif`,
    color: '#e0e0e0',
    lineHeight: 1.8,
    fontSize: '1rem',
    flexGrow: 1,
  },
  button: {
    marginTop: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: '#2575fc',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#6a11cb',
      transform: 'scale(1.05)', 
      textDecoration: 'underline',
    },
    borderRadius: '50px',
    padding: '8px 20px',
  },
}));


export interface ContentProps {
  currentSection: string | null;
}

const MyInfo: React.FC<ContentProps> = ({ currentSection }) => {
  const classes = useStyles();
  const correctPassword = 'IAmYourFutureBoss!'; // Definiere hier das richtige Passwort

  return (
    <div >
      <Grid >
  
        {/* Dynamisches Rendern der Sektionen basierend auf currentSection */}

        {currentSection === 'über mich' && <AboutMe />}
        {currentSection === 'skills' && <Skills />}
        {currentSection === 'bildungsweg' && <Education />}
        {currentSection === 'berufserfahrungen' && <WorkExperience />}
        {currentSection === 'kontakt' && <Contact/>}
        {currentSection === 'projekte ansehen' && <Content/>}
        {currentSection === 'unterlagen' && <Unterlagen/>}

      
       
      </Grid>
    </div>
  );
};

export default MyInfo;
