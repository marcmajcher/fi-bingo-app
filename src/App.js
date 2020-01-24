import React, { Component } from 'react';
import './App.css';
import facts from './bingoFacts';
import BingoGrid from './BingoGrid';
import Settings from './Settings';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentFacts: [],
      facts,
      freeCenter: true,
      showSettings: false,
      title: 'Welcome to Flatiron',
    };
  }

  getNewFacts() {
    this.setState({
      currentFacts: this.getShuffledArray(this.state.facts).slice(0, 25),
    });
  }

  getShuffledArray(array) {
    const a = array.slice(0);
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  componentDidMount() {
    this.getNewFacts();
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1>{this.state.title}</h1>
          <section class="controls">
            <ion-icon
              size="small"
              name="refresh"
              onClick={() => this.getNewFacts()}
            ></ion-icon>
            <ion-icon size="small" name="settings"></ion-icon>
          </section>
        </nav>

        <BingoGrid facts={this.state.currentFacts} />
        {this.state.showSettings ? <Settings /> : ''}
      </div>
    );
  }
}
