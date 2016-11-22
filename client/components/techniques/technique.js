import React, { Component } from 'react';
import { Techniques } from '../../../imports/collections/techniques';
import TechniqueCard from './technique_card';

class Technique extends Component {
  render() {
    const leftArrow = "<";
    const rightArrow = ">";

    return (
      <div className="techniqueflex">
        <div className="arrows">
          {leftArrow}
        </div>
      <div className="technique-card">
        <TechniqueCard />
      </div>

        <div className="arrows">
          {rightArrow}
        </div>
      </div>
    );
  }
}

export default Technique;
