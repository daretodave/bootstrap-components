/**
 * Created by timur on 2/12/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Container } from 'bootstrap-components'
import logo from '../../res/react-bootstrap.svg'
import { hideNav } from '../utils'
import { NavTab } from './'

const styles = {
  navBar: {
    margin: '0',
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    zIndex: 10
  },
  logo: {
    container: {
      margin: '-.4em 0'
    },
    image: {
      height: '2em'
    }
  }
}

export const Navbar = () => (
  <div
    className="navbar navbar-default"
    style={styles.navBar}
  >
    <Container>
      <div className="navbar-header">
        <button
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#nav-collapse"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
        </button>

        <Link
          className="navbar-brand"
          style={styles.logo.container}
          to="/getting-started"
          onClick={hideNav}
          children={
            <img
              src={logo}
              style={styles.logo.image}
              alt="React Bootstrap Components Logo"
            />
          }
        />
      </div>

      <div className="collapse navbar-collapse" id="nav-collapse">
        <ul className="nav navbar-nav">
          <NavTab>getting started</NavTab>
          <NavTab>grid</NavTab>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          {['icons', 'dropdowns'].map((title, i) =>
            <NavTab key={i}>{title}</NavTab>
          )}
        </ul>
      </div>
    </Container>
  </div>
)
