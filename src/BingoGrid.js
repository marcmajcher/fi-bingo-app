import React, { Component } from 'react';

export default class BingoGrid extends Component {
  constructor() {
    super();
    this.state = {
      currentFacts: [],
    };
  }

  getNewFacts() {
    const facts = this.getShuffledArray(this.props.facts).slice(0, 25);
    this.setState({ currentFacts: facts });
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
      <div className="bingo-grid">
        {this.state.currentFacts.map(fact => (
          <li key="{fact}" class="fact">{fact}</li>
        ))}
      </div>
    );
  }
}
