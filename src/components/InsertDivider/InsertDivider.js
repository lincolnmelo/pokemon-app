import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Divider from '@material-ui/core/Divider'
import Icon from '@mdi/react'
import { mdiFormatListBulletedType } from '@mdi/js'
import { mdiPokemonGo } from '@mdi/js'
import { mdiFlashOutline } from '@mdi/js'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  textDD: {
    padding: '2px'
  },
  attacksTypes: {
    paddingLeft: '30px',
  },
  itemWidth: {
    float: 'right'
  },
  img: {
    maxWidth: 240,
    paddingLeft: "15%"
  }
}))

export default function InsetDividers(props) {
  const classes = useStyles()
  const data = props.data

  return (
    <div key="InsetDividers">
      <img className={classes.img} alt={data.name} src={data.image} />

      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Icon path={mdiFormatListBulletedType}
              title="Types"
              size={1.5}
            />
          </ListItemAvatar>
          <ListItemText primary="Tipo:" />
          <div className={classes.itemWidth}>
            <dl>
              {data.types ? data.types.map(elem => <dd key={elem} className={classes.textDD}> {elem}</dd>) : ' '}
            </dl>
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />

        {data.evolutions ? (
          <>
            <ListItem>
              <ListItemAvatar>
                <Icon path={mdiPokemonGo}
                  title="Evolutions"
                  size={1.5}
                />
              </ListItemAvatar>
              <ListItemText primary="Evoluções:" />
              <div className={classes.itemWidth}>
                <dl>
                  {data.evolutions.map(elem => <dd key={elem.name} className={classes.textDD}>{elem.name}</dd>)}
                </dl>
              </div>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>) : ''
        }

        <ListItem>
          <ListItemAvatar>
            <Icon path={mdiFlashOutline}
              title="User Profile"
              size={1.5}
            />
          </ListItemAvatar>
          <ListItemText primary="Ataques:" />

          <div className={classes.itemWidth}>
            {data.attacks.fast ? (
              <dl className={classes.attacksTypes}>
                <dt>Rápidos:</dt>
                {data.attacks.fast ? data.attacks.fast.map(elem => <dd key={elem.name} className={classes.textDD}>{elem.name}</dd>) : ' '}
              </dl>) : ''
            }

            {data.attacks.special ? (
              <dl className={classes.attacksTypes}>
                <dt>Especiais:</dt>
                {data.attacks.special ? data.attacks.special.map(elem => <dd key={elem.name} className={classes.textDD}>{elem.name}</dd>) : ' '}
              </dl>) : ''
            }
          </div>

        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </div>
  )
}