import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Belts } from '../../../imports/collections/belts';

class BeltList extends Component {
renderList() {
  return this.props.belts.map(belt => {
    return (
      <div className="item" key={belt._id}>
        <div className={`ui ${belt.beltColor} button`} key={belt._id}>
          {belt.beltName}
        </div>
      </div>
    )
  })
}

  render() {
    return (
      <div className="ui list beltflex">
        {this.renderList()}
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('belts');

  return { belts: Belts.find({}).fetch() };
}, BeltList);
