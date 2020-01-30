import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(4),
    },
    height: "100%",
    width: "100%",
    marginTop: '75%',
    alignItems: "center",
    justifyContent: "center"
  },
}));

export default function LoadPage() {
  const classes = useStyles();

  return (
    <div className={classes.root} key={'LoadPage'}>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </div>
  );
}
