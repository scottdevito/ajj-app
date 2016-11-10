import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Belts } from '../../../imports/collections/belts';

class BeltList extends Component {
  render() {
    console.log(this.props.belts);
    return (
      <div>Belt List</div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('belts');

  return { belts: Belts.find({}).fetch() };
}, BeltList);
