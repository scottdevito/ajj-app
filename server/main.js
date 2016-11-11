import { Meteor } from 'meteor/meteor';
import { Belts } from '../imports/collections/belts';

Meteor.startup(() => {
  // Publish list of belts/belt info
  Meteor.publish('belts', function() {
    return Belts.find({});
  });

  // Insert inital belt data into the db if it's not already inserted
  if (Belts.find().count() === 0) {
    const beltsData = JSON.parse(Assets.getText('belts.json'));

    beltsData.map((item) => {
      Meteor.call('belts.insert', item);
    });
  }
});
