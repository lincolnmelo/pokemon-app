/*eslint-disable*/
import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import Icon from '@mdi/react'
import { mdiLinkedinBox } from '@mdi/js'

import styles from "../../assets/jss/material-kit-react/components/footerStyle.js"

const useStyles = makeStyles(styles)

export default function Footer(props) {
  const classes = useStyles()
  const { whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.right}>
          &copy {1900 + new Date().getYear()}
          ,{" "}
          <Icon path={mdiLinkedinBox}
            title="User Profile"
            size={1}
            horizontal
            vertical
            rotate={90}
            spin
          />
          {" "}
          <a
            href="https://br.linkedin.com/in/lincoln-melo"
            className={aClasses}
            target="_blank"
          >
            Lincoln Melo
          </a>{" "}
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
}