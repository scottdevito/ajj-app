import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Belts } from '../../../imports/collections/belts';

class BeltList extends Component {
renderList() {
  return this.props.belts.map(belt => {
    return (
      <div className={`item ${belt.beltColor}`} key={belt._id}>
        {belt.beltName}
      </div>
    )
  })
}

  render() {
        console.log(this.props.belts);
    return (
      <div className="ui middle aligned divided list">
        {this.renderList()}
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('belts');

  return { belts: Belts.find({}).fetch() };
}, BeltList);
