// Pass in a technique object as a prop (currentTechnique) to have it's details displayed
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Techniques } from '../../../imports/collections/techniques';


class TechniqueCard extends Component {
    render() {
      // Variable to keep track of when currentTechniqueInfo query is finished so it's data can be rendered
      let currentTechniqueInfoIsNotNull = this.props.currentTechniqueInfo != null;

      return (
        <div className="ui card">
          <div className="content">
            { currentTechniqueInfoIsNotNull ?
              <h2>{this.props.currentTechniqueInfo.techName}</h2> : 'Loading technique name...' }
          </div>
          <div className="technique-image-container">
            <img className="technique-image" src="http://www.americanjiujitsucenters.com/images/Dojopicture_621x316.png" />
          </div>
          <div className="content">
            { currentTechniqueInfoIsNotNull ?
              <div>{this.props.currentTechniqueInfo.techDesc}</div> : 'Loading description...' }
          </div>
          <div className="extra content">
            slider component
          </div>
        </div>
      );
    }
}

// Subscription to get technique info based on which techId is passed
export default createContainer((props) => {
  Meteor.subscribe('techniques');

  return { currentTechniqueInfo: Techniques.findOne({ 'techId': props.techId }) };
}, TechniqueCard);
