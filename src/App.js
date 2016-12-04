import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import NameList from './components/NameList'
import WinnerList from './components/WinnerList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main role="main">
          <div className="App__two-column">
            <div className="App__left-column">
              <NameList/>
            </div>
            <div className="App__right-column">
              <WinnerList/>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
