import { Meteor } from 'meteor/meteor';
import { Belts } from '../imports/collections/belts';
import { Techniques } from '../imports/collections/techniques';

Meteor.startup(() => {
  // Publish list of belts/belt info
  Meteor.publish('belts', function() {
    return Belts.find({});
  });

  // Publish list of techniques/technique info
  Meteor.publish('techniques', function() {
    return Techniques.find({});
  });

  // Insert inital belt data into the db if it's not already inserted
  if (Belts.find().count() === 0) {
    const beltsData = JSON.parse(Assets.getText('belts.json'));

    beltsData.map((item) => {
      Meteor.call('belts.insert', item);
    });
  }

  // Insert inital technique data into the db if it's not already inserted
  if (Techniques.find().count() === 0) {
    const techniquesData = JSON.parse(Assets.getText('techniques.json'));

    techniquesData.map((item) => {
      Meteor.call('techniques.insert', item);
    });
  }


});
