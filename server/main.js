import { Meteor } from 'meteor/meteor';
import { Belts } from '../imports/collections/belts';

Meteor.startup(() => {
  const beltsData = JSON.parse(Assets.getText('belts.json'));


  Meteor.call('belts.insert', beltsData);
/*
  _.each(companions, function(companion) {
    // replace this with something like Companions.insert(companion);
    console.log(beltsData);
  });

  */
});
