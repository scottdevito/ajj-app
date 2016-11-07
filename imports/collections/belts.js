// Collection of belts and beltIds

import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'belts.insert': function (beltsData) {
    Belts.insert(beltsData);
    console.log(beltsData);
  }
});

export const Belts = new Mongo.Collection('belts');
