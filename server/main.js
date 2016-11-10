import { Meteor } from 'meteor/meteor';
import { Belts } from '../imports/collections/belts';

Meteor.startup(() => {
  Meteor.publish('belts', function() {
    return Belts.find({ });
  });

  const beltsData = JSON.parse(Assets.getText('belts.json'));
  Meteor.call('belts.insert', beltsData);
});
