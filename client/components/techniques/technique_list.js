import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Techniques } from '../../../imports/collections/techniques';
import { Link } from 'react-router';

class TechniqueList extends Component {

  // Method for rendering list of Techniques
  //  filters the techniques from the techniques collection against the state
  //  from BeltList
  renderTechniqueList() {
    let visibleBeltColor = this.props.visibleBelt;

    return this.props.techniques.filter(function(obj){
      return obj.techBelt === visibleBeltColor;
    }).map(technique => {
      return (
        <div className="item" key={technique._id}>
          <div className="ui button large" key={technique._id}>
            <Link to="/technique"> {technique.techName} </Link>
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
