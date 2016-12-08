import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NameList from './components/NameList'
import WinnerList from './components/WinnerList'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      entrants: [],
      winners: []
    }

    this.addEntrant = this.addEntrant.bind(this)
    this.pickAWinner = this.pickAWinner.bind(this)
  }

  addEntrant (name) {
    this.setState({
      entrants: [].concat([name], ...this.state.entrants),
      winners: this.state.winners
    })
  }

  pickAWinner () {
    var theWinningNumber = Math.floor(
      Math.random() * this.state.entrants.length
    )
    var theWinner = this.state.entrants[theWinningNumber]
    var theRest = [].concat(this.state.entrants.slice(0,theWinningNumber), this.state.entrants.slice(theWinningNumber + 1))
    this.setState({
      entrants: theRest,
      winners: [].concat([theWinner], ...this.state.winners)
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <main role="main">
          <div className="App__flex-parent">
            <div className="App__flex-column App--background-1">
              <NameList entrants={this.state.entrants} addEntrant={this.addEntrant} />
            </div>
            <div className="App__flex-column App--background-2">
              <WinnerList winners={this.state.winners} pickAWinner={this.pickAWinner} />
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
