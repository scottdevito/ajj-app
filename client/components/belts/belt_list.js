import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Belts } from '../../../imports/collections/belts';
import TechniqueList from '../techniques/technique_list';

class BeltList extends Component {
  constructor(props) {
      super(props);

      //State to keep track of which techniques to display
      this.state = {
          visibleBelt: ""
      };
  }

// Event handler for belt list button click
displayBeltTechniques(beltColor, event){
  event.preventDefault();

  this.setState({
    visibleBelt: beltColor
});
}

// Method for rendering list of belts
renderBeltList() {
  return this.props.belts.map(belt => {
    return (
      <div className="item" key={belt._id}>
        <div className={`ui ${belt.beltDisplay} button`} key={belt._id} onClick={this.displayBeltTechniques.bind(this, belt.beltColor)}>
          {belt.beltName}
        </div>
      </div>
    )
  })
}

  render() {
    return (
      <div className="flexwrap">
        <div className="ui list beltflex">
          {this.renderBeltList()}
        </div>
          <TechniqueList visibleBelt={(this.state.visibleBelt)} />

      </div>
    );
  }
}

// Set up belts supscription
export default createContainer(() => {
  Meteor.subscribe('belts');

  return { belts: Belts.find({}).fetch() };
}, BeltList);
