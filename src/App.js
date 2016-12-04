import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import NameList from './NameList'

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
              <p>right column</p>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
