import React, { Component } from 'react'
import logo from '../assets/logo200.png'


class ReactLogo extends Component {
  render () {
    return (
      <span className="ReactLogo">
        <img src={logo} className="ReactLogo__logo ReactLogo--spinning" alt="React.js spinning logo" />
      </span>
    )
  }
}


export default ReactLogo
