import React, { Component } from 'react'


class WinnerList extends Component {

  handlePick (e) {
    /// placeholder
    alert('PICKED!')

    /// when the user clicks the PICK button, dispatch an event
    /// to the entryList to pick a name, which is removed from
    /// the entryList and dispatched with an action to add the name
    /// to the winnerList.

  }


  render () {
    return (
      <section className="WinnerList">
        <heading className="WinnerList__heading">
          <h2 className="WinnerList__title">Winners!</h2>
          <p className="WinnerList__instructions">
            Then press the "PICK!" button to select winners.
          </p>
        </heading>
        <button className="WinnerList__button" onClick={this.handlePick}>PICK!</button>
        <ul className="WinnerList__list">
          <li className="WinnerList__list-item">
            a winner
          </li>
        </ul>
      </section>
    )
  }
}

export default WinnerList
