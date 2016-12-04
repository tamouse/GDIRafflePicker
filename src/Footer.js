import React, { Component } from 'react'
import './Footer.css'
import tamouse from './tamouse.json'

class Footer extends Component {
  render () {
    return (
      <footer className="Footer">
        <span className="Footer__copyright">Written with &hearts; by&nbsp;
          <a href="{tamouse.url}">{tamouse.nickName}</a>.</span>
        <span className="Footer__acknowledgements">&hearts; React.</span>
      </footer>
    )
  }
}

export default Footer
