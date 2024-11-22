import React from 'react';
import Link from 'next/link';
import { Grid, Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Contact from './Contact';
import Footer from './Footer';

const useStyles = makeStyles(() => ({
  root: {
    background: 'linear-gradient(135deg, #6a11cb, #2575fc)', // Neuer Verlauf (Blau-Violett)
    minHeight: '100vh',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.9)', // Hellerer Hintergrund, aber mit mehr Transparenz
    borderRadius: '10px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px', // Container kleiner gemacht
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 345,
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.2)',
    },
    height: '100%',
  },
  media: {
    height: 200,
    transition: 'opacity 0.3s',
    '&:hover': {
      opacity: 0.85,
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
  },
  title: {
    fontFamily: `'Roboto Slab', serif`,
    fontWeight: 700,
    fontSize: '1.5rem',
    color: '#fff',
    marginBottom: '10px',
  },
  description: {
    fontFamily: `'Open Sans', sans-serif`,
    color: '#e0e0e0',
    lineHeight: 1.6,
    flexGrow: 1,
  },
  button: {
    marginTop: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: '#2575fc', // Buttonfarbe an das neue Farbschema angepasst
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#6a11cb', // Farbwechsel beim Hover
    },
    borderRadius: '50px',
    padding: '8px 20px',
  },
}));

const cardData = [
  {
    title: 'Kreativer Inhalt 1',
    description: 'Hier können Sie einige interessante Informationen über das Thema einfügen.',
    image: 'https://source.unsplash.com/random?landscape,1',
    link: '/content1',
  },
  {
    title: 'Kreativer Inhalt 2',
    description: 'Ein weiterer spannender Bereich, den Sie entdecken können.',
    image: 'https://source.unsplash.com/random?landscape,2',
    link: '/content2',
  },
  {
    title: 'Kreativer Inhalt 3',
    description: 'Weitere Informationen zu einem anderen Thema.',
    image: 'https://source.unsplash.com/random?landscape,3',
    link: '/content3',
  },
  {
    title: 'Kreativer Inhalt 4',
    description: 'Erfahren Sie mehr über diesen interessanten Aspekt.',
    image: 'https://source.unsplash.com/random?landscape,4',
    link: '/content4',
  },
  {
    title: 'Kreativer Inhalt 5',
    description: 'Entdecken Sie weitere spannende Details.',
    image: 'https://source.unsplash.com/random?landscape,5',
    link: '/content5',
  },
  {
    title: 'Kreativer Inhalt 6',
    description: 'Hier finden Sie zusätzliche Informationen.',
    image: 'https://source.unsplash.com/random?landscape,6',
    link: '/content6',
  },
];

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4} className={classes.gridContainer}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={card.image}
                title={card.title}
              />
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
         <Contact/>
       <Footer />
      </Grid>
    </div>
  );
};

export default Content;
