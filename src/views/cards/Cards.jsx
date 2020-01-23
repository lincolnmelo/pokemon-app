import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CardsContent } from './Card'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 10
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Cards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container
            direction="row"
            justify="center"
            alignItems="center"
      >
        <CardsContent />
      </Grid>
    </div>
  );
}