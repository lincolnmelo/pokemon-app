import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CustonModal from '../../../components/CustomModal/CustomModal'
import './Card.css'

import LinearBuffer from '../../linearBuffer/LinearBuffer'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  grid: {
    paddingRight: 4,
    paddingBottom: 10
  },
  card: {
    maxWidth: 345,
    minWidth: 170,
  }
})

const GET_GREETING = gql`
  {
    pokemons(first: 20){
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
`

export function CardsContent() {
  const classes = useStyles()
  const { loading, error, data } = useQuery(GET_GREETING)
  if (loading) return (<LinearBuffer />)
  if (error) return <p>Error ...</p>

  return data.pokemons.map(elem => {
    return (
      <Grid className={classes.grid} key={elem.name}>
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
            <CustonModal data={elem}/>
          </CardActions>
        </Card>
      </Grid>
    )
  })
}