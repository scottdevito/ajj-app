import React, { Component } from 'react';
import TechniqueCard from './technique_card';

class Technique extends Component {
  // Event handler for left and right buttons
  handleNavigationClick(direction, event) {
    console.log(`${direction} navigation button clicked`);

    // Check if the next technique exists in the color belt (if it doesn't, check if it exists at all then prompt the user if they want to go to the next belt)

    // Validate the user to see if they have access to this technique

    // Move the preview slider to the right or left depending on which direction was passed

    // Load new technique info depending on which direction was passed

  }

  render() {
    return (
      <div className="technique-flex">
        <div className="arrows">
          <i className="huge chevron left icon link" onClick={this.handleNavigationClick.bind(this, "left")}></i>
        </div>

        <div className="technique-card">
          <TechniqueCard techId={this.props.params.techId} />
        </div>

        <div className="arrows">
          <i className="huge chevron right icon link" onClick={this.handleNavigationClick.bind(this, "right")}></i>
        </div>
      </div>
    );
  }
}

export default Technique;
