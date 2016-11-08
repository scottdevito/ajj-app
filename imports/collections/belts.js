// Collection of belts and beltIds

import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check'

Meteor.methods({
  'belts.insert': function (beltsData) {

    check(beltsData, Object);

    // Ensure that only server can invoke this method
    if(this.connection == null) {
      Belts.insert(beltsData);
    }
  }
});

export const Belts = new Mongo.Collection('belts');
