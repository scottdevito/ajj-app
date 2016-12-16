import React, { Component } from 'react';
import { Belts } from '../../../imports/collections/belts';

class BeltList extends Component {
  // Event handler for belt list button click
  handleBeltClick(beltColor, event) {
    event.preventDefault();

    // Callback to parent component to change state (visibleBelt)
    this.props.onBeltClick(beltColor);
  }

  // Method for rendering list of belts
  renderBeltList() {
    return this.props.belts.map(belt => {
      return (
        <div className="item" key={belt._id}>
          <div className={`ui ${belt.beltDisplay} button`} key={belt._id} onClick={this.handleBeltClick.bind(this, belt.beltColor)}>
            {belt.beltName}
          </div>
        </div>
      )
    })
  }

  render() {
    return (
        <div className="ui list beltlist-flex">
          {this.renderBeltList()}
        </div>
    );
  }
}

export default BeltList;
