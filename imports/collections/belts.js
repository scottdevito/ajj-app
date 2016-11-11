// Collection of belts and beltIds

import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check'

Meteor.methods({
  'belts.insert': function (item) {
    // Ensure beltsData is an object
    check(item, Object);

    // Ensure that only server can invoke this method
    if(this.connection == null) {
      Belts.insert(item);
    }
  }
});

export const Belts = new Mongo.Collection('belts');
