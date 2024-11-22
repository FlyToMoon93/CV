// components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    backgroundColor: '#ff4081',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#e040fb',
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Lebenslauf
        </Typography>
       
      </Toolbar>
    </AppBar>
  );
};

export default Header;
