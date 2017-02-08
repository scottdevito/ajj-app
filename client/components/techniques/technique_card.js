// Pass in a technique object as a prop (currentTechnique) to have it's details displayed
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { markdown } from 'markdown';
import DOMPurify from 'dompurify';

import { Techniques } from '../../../imports/collections/techniques';


class TechniqueCard extends Component {
    render() {
      // Variable to keep track of when currentTechniqueInfo query is finished so it's data can be rendered
      let currentTechniqueInfoIsNotNull = this.props.currentTechniqueInfo != null;
      
      // Create variable so that div can render without data
      let cleanHTML = '';
      
      // Assigns markdown string converted to HTML after techDesc is loaded
      if(currentTechniqueInfoIsNotNull) {
        cleanHTML = DOMPurify.sanitize(markdown.toHTML(this.props.currentTechniqueInfo.techDesc));
      }

      return (
        <div className="ui card">
          <div className="content">
            { currentTechniqueInfoIsNotNull ?
              <h2>{this.props.currentTechniqueInfo.techName}</h2> : '' }
          </div>
          <div className="technique-image-container">
            { currentTechniqueInfoIsNotNull ? 
              <img className="technique-image" src={this.props.currentTechniqueInfo.techImgURL} /> : '' }
          </div>
          <div className="content">
            { currentTechniqueInfoIsNotNull ?
              <div dangerouslySetInnerHTML={{__html: cleanHTML}}></div> : '' }
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
