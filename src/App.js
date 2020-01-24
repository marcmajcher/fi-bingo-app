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
      center: 'selfie',
      showBingo: true,
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

  handleSettingsChange = (key, value) => {
    this.setState({ [key]: value });
  };

  updateFacts = facts => {
    this.setState({ facts }, () => this.getNewFacts());
  };

  toggleSettings = () => {
    this.setState({ showSettings: !this.state.showSettings });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <h1>{this.state.title}</h1>
          <section className="controls">
            {this.state.showSettings ? (
              ''
            ) : (
              <ion-icon
                size="small"
                name="refresh"
                onClick={() => this.getNewFacts()}
              ></ion-icon>
            )}
            <ion-icon
              size="small"
              name="settings"
              onClick={this.toggleSettings}
            ></ion-icon>
          </section>
        </nav>
        {this.state.showSettings ? (
          <Settings
            handleSettingsChange={this.handleSettingsChange}
            center={this.state.center}
            showBingo={this.state.showBingo}
            title={this.state.title}
            facts={this.state.facts}
            updateFacts={this.updateFacts}
          />
        ) : (
          ''
        )}

        {this.state.showSettings ? (
          ''
        ) : (
          <BingoGrid
            bingo={this.state.showBingo}
            facts={this.state.currentFacts}
            center={this.state.center}
            title={this.state.title}
          />
        )}
      </div>
    );
  }
}
