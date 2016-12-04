import React, { Component } from 'react'
import './WinnerList.css'



class WinnerList extends Component {
  render () {
    return (
      <div className="WinnerList">
        <heading className="WinnerList__heading">
          <h2 className="WinnerList__title">Winners!</h2>
        </heading>
        <ul className="WinnerList__list">
          <li className="WinnerList__list-item">
            a winner
          </li>
        </ul>
      </div>
    )
  }
}

export default WinnerList
