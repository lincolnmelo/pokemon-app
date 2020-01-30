import React from "react"
import classNames from "classnames"
// import CustomInput from "../../components/CustomInput/CustomInput.js"
// import Search from "@material-ui/icons/Search"
// import Button from "../../components/CustomButtons/Button.js"
import { makeStyles } from "@material-ui/core/styles"
import GridContainer from "../../components/Grid/GridContainer.js"
import GridItem from "../../components/Grid/GridItem.js"
import Parallax from "../../components/Parallax/Parallax.js"
import Footer from '../../components/Footer/Footer'
import profile from "../../assets/img/homePage/pokedex-app.png"
import styles from "../../assets/jss/material-kit-react/views/profilePage.js"
import Cards from '../cards/Cards'

const useStyles = makeStyles(styles)

export default function HomePage() {
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
              <GridItem xs={11} sm={11} md={12}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="" className={imageClasses} />
                  </div>
                </div>

                {/* <div className={classes.search}>
                  <CustomInput
                    white
                    inputRootCustomClasses={classes.inputRootCustomClasses}
                    formControlProps={{
                      className: classes.formControl
                    }}
                    inputProps={{
                      placeholder: "Pesquisar ",
                      inputProps: {
                        "aria-label": "Search",
                        className: classes.searchInput
                      }
                    }}
                  />
                  <Button justIcon round color="white">
                    <Search className={classes.searchIcon} />
                  </Button>
                </div> */}
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