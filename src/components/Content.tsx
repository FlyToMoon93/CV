import Link from 'next/link';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Contact from './Contact';
import React from 'react';
import AboutMe from './About';  // Import der AboutMe-Komponente
import Education from './Education'; // Import der Education-Komponente
import WorkExperience from './WorkExperience'; // Import der WorkExperience-Komponente
import Skills from './Skills';

const useStyles = makeStyles(() => ({
  root: {
    background: 'linear-gradient(135deg, #2c3e50, #4b4b4b)',
    minHeight: '100vh',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    padding: '30px',
    background: 'linear-gradient(135deg, #2c3e50, #4b4b4b)',
    borderRadius: '10px',
    maxWidth: '1100px', 
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 345,
    borderRadius: '15px',
    overflow: 'hidden',
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

// Daten für die Boxen
const cardData = [
  { title: 'Kreativer Inhalt 1', description: 'Hier können Sie einige interessante Informationen über das Thema einfügen.', background: 'linear-gradient(135deg, #ff7e5f, #feb47b)', link: '/content1' },
  { title: 'Kreativer Inhalt 2', description: 'Ein weiterer spannender Bereich, den Sie entdecken können.', background: 'linear-gradient(135deg, #6a11cb, #2575fc)', link: '/content2' },
  { title: 'Kreativer Inhalt 3', description: 'Weitere Informationen zu einem anderen Thema.', background: 'linear-gradient(135deg, #f79c42, #f0c27b)', link: '/content3' },
  { title: 'Kreativer Inhalt 4', description: 'Erfahren Sie mehr über diesen interessanten Aspekt.', background: 'linear-gradient(135deg, #00c6ff, #0072ff)', link: '/content4' },
  { title: 'Kreativer Inhalt 5', description: 'Entdecken Sie weitere spannende Details.', background: 'linear-gradient(135deg, #ff5f6d, #ffc3a0)', link: '/content5' },
  { title: 'Kreativer Inhalt 6', description: 'Hier finden Sie zusätzliche Informationen.', background: 'linear-gradient(135deg, #3a7bd5, #3a3dff)', link: '/content6' },
];

interface ContentProps {
  currentSection: string | null;
}

const Content: React.FC<ContentProps> = ({ currentSection }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    

      <Grid container spacing={4} className={classes.gridContainer}>
    { currentSection && <Box sx={{ padding: '20px', backgroundColor: '#f4f6f9', borderRadius: '8px',    width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
        {/* Dynamisches Rendern der Sektionen basierend auf currentSection */}
        {currentSection === 'über mich' && <AboutMe />}
        {currentSection === 'skills' && <Skills />}
        {currentSection === 'bildungsweg' && <Education />}
        {currentSection === 'berufserfahrungen' && <WorkExperience />}
      </Box>}
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <div className={classes.colorBox} style={{ background: card.background }}></div>
              <CardContent className={classes.cardContent}>
                <Typography variant="h5" className={classes.title}>
                  {card.title}
                </Typography>
                <Typography variant="body2" className={classes.description}>
                  {card.description}
                </Typography>
                <Link href={card.link} passHref>
                  <Button size="small" className={classes.button}>
                    Mehr erfahren
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Contact />
      </Grid>
    </div>
  );
};

export default Content;
