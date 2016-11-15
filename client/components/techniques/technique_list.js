import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Techniques } from '../../../imports/collections/techniques';

class TechniqueList extends Component {

  // Method for rendering list of Techniques
  renderTechniqueList() {
    return this.props.techniques.map(technique => {
      return (
        <div className="item" key={technique._id}>
          <div className="ui button large" key={technique._id}>
            {technique.techName}
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui list techniquelistflex">
          {this.renderTechniqueList()}
      </div>
    );
  }
}


// Set up techniques subscription
export default createContainer(() => {
  Meteor.subscribe('techniques');

  return { techniques: Techniques.find({}).fetch() };
}, TechniqueList);
