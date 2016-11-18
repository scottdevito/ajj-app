import { Techniques } from '../../../imports/collections/techniques';
import React, { Component } from 'react';

class Technique extends Component {
  render() {
    return (
      <div>
          <h1>Technique Page</h1>
          <p>Technique #{this.props.params.techId}</p>
      </div>
    );
  }
}

export default Technique;
