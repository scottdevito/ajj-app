// Collection of techniques, technique ids, technique belts, and technique descriptions

import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check'

Meteor.methods({
  // Method to insert techniques.json into Techniques collection
  'techniques.insert': function (item) {
    // Ensure techniquesData is an object
    check(item, Object);

    // Ensure that only server can invoke this method
    if(this.connection == null) {
      Techniques.insert(item);
    }
  },

  'techniques.update': function(techId, changesStateObj) {
    return Techniques.update(Techniques.findOne({ 'techId': techId }), { 
      $set: { 
        'techName': changesStateObj.titleChanges,
        'techImgURL': changesStateObj.imageURLChanges,
        'techDesc': changesStateObj.descriptionChanges
      } 
    });
  }
});

export const Techniques = new Mongo.Collection('techniques');
