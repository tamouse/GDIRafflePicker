import React, { Component } from 'react'
import './NameList.css'

class NameList extends Component {

  handleKeyDown (e) {
    if (e.keyCode === 13) { // when the user presses the Enter key in the input box

      alert(e.target.value)
      /// placeholder for dispatch to add the name to the entryList

      e.target.value = '' // clear the input field for the next entry
    }
  }


  render () {
    return (
      <section className="NameList">
        <header className="NameList__header">
          <h2 className="NameList__title">Names</h2>
          <p className="NameList__instructions">
            Enter names one at a time in the input box.
          </p>
        </header>
        <input type="text" onKeyDown={this.handleKeyDown}/>
        <ul className="NameList__list">
          <li>a name</li>
        </ul>
      </section>
    )
  }
}

export default NameList
