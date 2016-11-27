import React, { Component } from 'react';
import TechniqueCard from './technique_card';

class Technique extends Component {
  render() {
    return (
      <div className="technique-flex">
        <div className="arrows">
          <i className="chevron left icon"></i>
        </div>

        <div className="technique-card">
          <TechniqueCard techId={this.props.params.techId} />
        </div>

        <div className="arrows">
          <i className="chevron right icon"></i>
        </div>
      </div>
    );
  }
}

export default Technique;
