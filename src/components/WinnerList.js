import React, { Component } from 'react'


export default class WinnerList extends Component {

  render () {
    return (
      <section className="WinnerList">
        <heading className="WinnerList__heading">
          <h2 className="WinnerList__title">Winners!</h2>
          <p className="WinnerList__instructions">
            Then press the "PICK!" button to select winners.
          </p>
        </heading>
        <button className="WinnerList__button" onClick={this.props.pickAWinner}>PICK!</button>
        <ul className="WinnerList__list">
            {this.props.winners.map((winner, index) => {
              return (<li className="WinnerList__list-item" key={`entrant-${index}`}>{winner}</li>)
            })}
        </ul>
      </section>
    )
  }
}
