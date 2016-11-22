import { Techniques } from '../../../imports/collections/techniques'
import React, { Component } from 'react';

class TechniqueCard extends Component {
    render() {
      return (
        <div className="ui card">
          <div className="content">
            <div className="right floated meta">14h</div>
              <img className="ui avatar image" src="/images/avatar/large/elliot.jpg" />
              Elliot
            </div>
            <div className="image">
              <img />
            </div>
            <div className="content">
              <span className="right floated">
                <i className="heart outline like icon"></i>
                17 likes
              </span>
              <i className="comment icon"></i>
              3 comments
            </div>
            <div className="extra content">
            <div className="ui large transparent left icon input">
              <i className="heart outline icon"></i>
              <p>Technique # {this.props.techId}</p>
              <input type="text" placeholder="Add Comment..." />
            </div>
          </div>
        </div>
      );
    }
}

export default TechniqueCard;
