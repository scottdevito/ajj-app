import { Meteor } from 'meteor/meteor';
import { Belts } from '../imports/collections/belts';

Meteor.startup(() => {
  // Publish list of belts/belt info
  Meteor.publish('belts', function() {
    return Belts.find({});
  });
});
