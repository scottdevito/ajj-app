import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

class TechniqueList extends Component {

  // Method for rendering list of Techniques
  renderTechniqueList() {
    return (
      <div className="ui list techniquelistflex">
        <div className="ui button large">Technique 1</div>
        <div className="ui button large">Technique 2</div>
        <div className="ui button large">Technique 3</div>
        <div className="ui button large">Technique 4</div>
        <div className="ui button large">Technique 5</div>
      </div>
    )
  }

  render() {
    return (
      <div>
          {this.renderTechniqueList()}
      </div>
    );
  }
}

export default TechniqueList;
// Set up techniques subscription later
// export default createContainer(() => {
//   Meteor.subscribe('belts');
//
//   return { belts: Belts.find({}).fetch() };
// }, BeltList);
