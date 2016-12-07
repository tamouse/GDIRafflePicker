import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NameList from './components/NameList'
import WinnerList from './components/WinnerList'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main role="main">
          <div className="App__flex-parent">
            <div className="App__flex-column App--background-1">
              <NameList/>
            </div>
            <div className="App__flex-column App--background-2">
              <WinnerList/>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
