import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';

class App extends Component {
  render() {
    
    const maintitle = 'JavaScript Libraries & Frameworks Seminar';
    return (
      <header>
        <h1>{maintitle}</h1>
        <br/>
        <p>Simple example</p>
      </header>
    );
  }
}

export default App;
