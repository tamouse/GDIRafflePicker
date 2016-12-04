import React, { Component } from 'react'
import './NameList.css'

class NameList extends Component {
  render () {
    return (
      <div className="NameList">
        <header className="NameList__header">
          <h2 className="NameList__title">Names</h2>
          <p className="NameList__instructions">
            Enter names one at a time in the input box, pressing Enter after each name.
            <br/>
            Then press the "PICK" button to pick the winner(s).
          </p>
        </header>
        <input type="text"/>
        <ul className="NameList__list">
          <li>a name</li>
        </ul>
      </div>
    )
  }
}

export default NameList
