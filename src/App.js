// import logo from './logo.svg';
import './App.css';

// rcc -> react component
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  // c="SK"
  render() {
    return (
      <div>
        <NavBar />
        <News />

      </div>
    )
  }
}
