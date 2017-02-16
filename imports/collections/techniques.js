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

    // Ensure image is not an svg for xss precaution
    if((changesStateObj.imageURLChanges).slice(-4) === (".svg")) {
      throw new Meteor.Error("Please choose another image type", "Invalid image type");
    }

    // Ensure techName is a string so it can be rendered by BeltList
    check((changesStateObj.titleChanges), String);

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
