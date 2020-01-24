import React, { Component } from 'react';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: props.center,
      currentFacts: props.facts,
      showBingo: props.showBingo,
      title: props.title,
    };
  }

  handleCheckChange = e => {
    this.props.handleSettingsChange(e.target.name, e.target.checked);
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
    this.props.handleSettingsChange(e.target.name, e.target.value);
  };

  handleFactsChange = e => {
    this.setState({ currentFacts: e.target.value.split('\n') });
  };

  handleCenterChange = e => {
    this.props.handleSettingsChange(e.target.name, e.target.value)
  }

  updateFacts = e => {
    this.props.updateFacts(this.state.currentFacts);
  };

  render() {
    return (
      <div className="settings">
        <form>
          <div>
            <div>
              Title:{' '}
              <input
                name="title"
                onChange={this.handleTitleChange}
                value={this.state.title}
              ></input>
            </div>
            <select
              name="center"
              value={this.props.center}
              onChange={this.handleCenterChange}
            >
              <option value="normal">Normal</option>
              <option value="free">Free</option>
              <option value="selfie">Selfie</option>
            </select>
            <input
              name="freeCenter"
              type="checkbox"
              onChange={this.handleCheckChange}
              checked={this.props.freeCenter}
            />{' '}
            Free Center?
          </div>
          <div>
            <input
              name="showBingo"
              type="checkbox"
              onChange={this.handleCheckChange}
              checked={this.props.showBingo}
            />{' '}
            Show Bingo?
          </div>
          <div>
            <textarea
              name="allFacts"
              className="facts-editor"
              value={this.state.currentFacts.join('\n')}
              onChange={this.handleFactsChange}
            ></textarea>
          </div>
          <input
            type="button"
            onClick={this.updateFacts}
            value="Update Facts"
          />
        </form>
      </div>
    );
  }
}
