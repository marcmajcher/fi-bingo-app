import React, { Component } from 'react';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freeCenter: props.freeCenter,
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
          {/* <textarea name="allFacts">facts go here</textarea> */}
        </form>
      </div>
    );
  }
}
