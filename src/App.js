import React, { Component } from 'react';
import './App.css';
import facts from './bingoFacts';
import BingoGrid from './BingoGrid';
import Settings from './Settings';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      facts,
      showSettings: false,
      title: 'Welcome to Flatiron',
      freeCenter: true,
    };
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1>{this.state.title}</h1>
          <ion-icon name="refresh"></ion-icon>
          <ion-icon name="settings"></ion-icon>
        </nav>

        <BingoGrid facts={this.state.facts} />
        {this.state.showSettings ? <Settings /> : ''}
      </div>
    );
  }
}
