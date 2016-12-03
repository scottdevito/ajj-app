import React, { Component } from 'react';
import TechniqueCard from './technique_card';
import { browserHistory } from 'react-router';

class Technique extends Component {
  // Event handler for left and right navigation buttons
  handleNavigationClick(direction, techId, event) {
    let prevTechId = parseInt(techId) - 1,
        nextTechId = parseInt(techId) + 1,
        browseableNextTechId = techId;

    // Function to pad browseableNextTechId so it can be used by the router
    function padTechId (techId) {
      if (techId <= 9999) { techId = ("000" + techId).slice(-4); }
      return techId.toString();
    }

    // Add or subtract one from current techId based on which direction was clicked
    if (direction === "left" && techId !== "0000") {
      browseableNextTechId = padTechId(prevTechId);
    } else if (direction === "right") {
      browseableNextTechId = padTechId(nextTechId);
    }

    // Navigate to the next technique
    browserHistory.push(`/technique/${browseableNextTechId}`);

    // Validate the user to see if they have access to this technique

    // Move the preview slider to the right or left depending on which direction was passed

  }

  render() {
    let techId = this.props.params.techId;
    return (
      <div className="technique-flex">
        <div className="arrows">
          <i className="huge chevron left icon link" onClick={this.handleNavigationClick.bind(this, "left", techId)}></i>
        </div>

        <div className="technique-card">
          <TechniqueCard techId={techId} />
        </div>

        <div className="arrows">
          <i className="huge chevron right icon link" onClick={this.handleNavigationClick.bind(this, "right", techId)}></i>
        </div>
      </div>
    );
  }
}

export default Technique;
