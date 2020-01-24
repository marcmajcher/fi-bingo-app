import React, { Component } from 'react';

export default class BingoGrid extends Component {
  render() {
    return (
      <div className="bingo-grid">
        {this.props.facts.map(fact => (
          <li key="{fact}" class="fact">
            {fact}
          </li>
        ))}
      </div>
    );
  }
}
