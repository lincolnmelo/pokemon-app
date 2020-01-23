import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import './Card.css'


import LinearBuffer from './LinearBuffer'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  grid: {
    padding: 10
  },
  card: {
    maxWidth: 345,
  }
});

const GET_GREETING = gql`
  {
    pokemons(first: 10){
      id
      name
      image
      types
      evolutions {
        name
        image
      }
      attacks{
        fast{
          name
          damage
        }
        special{
          name
          damage
        }
      }
    }
  }
`;

export function CardsContent() {
  const classes = useStyles()
  const { loading, error, data } = useQuery(GET_GREETING);
  if (loading) return (<LinearBuffer />)
  if (error) return <p>Error ...</p>;

  return data.pokemons.map(elem => {
    return (
      <Grid className={classes.grid}>
        <Card key={elem.name} className={classes.card}>
          <CardActionArea>
            <img className={'img'} src={elem.image} alt=""/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {elem.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Tipo: {elem.types}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <InfoSharpIcon edge="start" className={classes.menuButton} color="primary" aria-label="Mais">
              </InfoSharpIcon>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
  })
}