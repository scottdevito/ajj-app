import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Belts } from '../../../imports/collections/belts';
import TechniqueList from '../techniques/technique_list';

class BeltList extends Component {

// Event handler for belt list button click
displayBeltTechniques(beltColor, event){
  event.preventDefault();
  console.log(beltColor);
}

// Method for rendering list of belts
renderBeltList() {
  return this.props.belts.map(belt => {
    return (
      <div className="item" key={belt._id}>
        <div className={`ui ${belt.beltDisplay} button`} key={belt._id} onClick={this.displayBeltTechniques.bind(this, belt.beltColor)}>
          {belt.beltName}
        </div>
      </div>
    )
  })
}

  render() {
    return (
      <div className="flexwrap">
        <div className="ui list beltflex">
          {this.renderBeltList()}
        </div>
          <TechniqueList />

      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('belts');

  return { belts: Belts.find({}).fetch() };
}, BeltList);
