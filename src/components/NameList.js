import React, { Component } from 'react'

export default class NameList extends Component {

  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown (e) {
    if (e.keyCode === 13) { // when the user presses the Enter key in the input box
      this.props.addEntrant(e.target.value)
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
        <input className="NameList__input" type="text" onKeyDown={this.handleKeyDown}/>
        <ul className="NameList__list">
          {this.props.entrants.map((entrant,index) => {
            return (<li key={`entrant-${index}`}>{entrant}</li>)
          })}
        </ul>
      </section>
    )
  }
}
