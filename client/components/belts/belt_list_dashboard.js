import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import TechniqueList from '../techniques/technique_list';
import BeltList from './belt_list';

import { Belts } from '../../../imports/collections/belts';

class BeltListDashboard extends Component {
  constructor(props) {
      super(props);

      // State to keep track of which techniques to display based on which belt the user clicks
      this.state = {
          visibleBelt: ""
      };

      // So that displayBeltListTechniques() has access to setState
      this.displayBeltListTechniques = this.displayBeltListTechniques.bind(this);
  }

  displayBeltListTechniques(beltColor) {
    this.setState({
      visibleBelt: beltColor
    });
  }

  render() {
    return (
      <div className="flexwrap">
        <BeltList belts={this.props.belts} onBeltClick={this.displayBeltListTechniques} />
        <TechniqueList visibleBelt={(this.state.visibleBelt)} />
      </div>
    );
  }
}

// Set up belts supscription
export default createContainer(() => {
  Meteor.subscribe('belts');

  return { belts: Belts.find({}).fetch() };
}, BeltListDashboard);
