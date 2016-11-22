import { Techniques } from '../../../imports/collections/techniques'
import React, { Component } from 'react';

class TechniqueCard extends Component {
    render() {
      return (
        <div className="ui card">
          <div className="content">
            <h2>Technique #{this.props.techId}</h2>
          </div>
          <div className="technique-image-container">
            <img className="technique-image" src="http://www.americanjiujitsucenters.com/images/Dojopicture_621x316.png" />
          </div>
          <div className="content">
            <p>Example technique description. This is the description of a technique. In this description, there are bulleted lists, pointers, a successive collection of instructions and a few more things. This is a very basic technique description.</p>
            <ul>
              <li>first thing</li>
              <li>second part of technique</li>
              <li>third part</li>
              <li>fifth part</li>
              <li>sixth part</li>
              <li>seventh part</li>
              <li>wow, lots of steps</li>
            </ul>
          </div>
          <div className="extra content">
            slider
          </div>
        </div>
      );
    }
}

export default TechniqueCard;
