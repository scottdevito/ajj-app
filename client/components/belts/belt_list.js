import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Belts } from '../../../imports/collections/belts';

class BeltList extends Component {
renderList() {
  return this.props.belts.map(belt => {
    return (
      <li className={`list-group-item ${belt.beltColor}`} key={belt._id}>
        {belt.beltName}
      </li>
    )
  })
}

  render() {
        console.log(this.props.belts);
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('belts');

  return { belts: Belts.find({}).fetch() };
}, BeltList);
