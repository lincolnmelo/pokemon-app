import React from "react"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import GridContainer from "../../components/Grid/GridContainer.js"
import GridItem from "../../components/Grid/GridItem.js"
import Parallax from "../../components/Parallax/Parallax.js"
import Footer from '../../components/Footer/Footer'

import profile from "../../assets/img/homePage/pokedex-app.png"
import styles from "../../assets/jss/material-kit-react/views/profilePage.js"
import Cards from '../cards/Cards'

const useStyles = makeStyles(styles)

export default function ProfilePage() {
  const classes = useStyles()
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )
  return (
    <div>
      <Parallax small filter image={require("../../assets/img/homePage/ParallaxPage.png")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="" className={imageClasses} />
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
          <Cards />
          <Footer />
        </div>
      </div>
    </div>
  )
}
