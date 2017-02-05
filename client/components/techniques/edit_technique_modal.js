import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Techniques } from '../../../imports/collections/techniques';

class EditTechniqueModal extends Component {
    handleCloseModal() {
        // Set parent state to false
        this.props.onCloseModal();
    }

    render() {
        // Variable to keep track of when currentTechniqueInfo query is finished so it's data can be rendered
        let modalCurrentTechniqueInfoIsNotNull = this.props.modalCurrentTechniqueInfo != null;
        
        return(
            <div className="ui modal">
                <i className="close icon" onClick={this.handleCloseModal.bind(this)}></i>
                <div className="header">
                    Edit Technique #{this.props.modalTechId}
                </div>
                <div className="image content">
                    <div className="description">
                        <div className="ui header">Title:</div>
                        <p>{modalCurrentTechniqueInfoIsNotNull ?
                            <input type='text' size='50' value={this.props.modalCurrentTechniqueInfo.techName} /> : '' }
                        </p>
                        <div className="ui header">Image URL:</div>
                        <p>{modalCurrentTechniqueInfoIsNotNull ?
                            <input type='text' size='50' value={this.props.modalCurrentTechniqueInfo.techImgURL} /> : '' }
                        </p>                            
                        <div className="ui header">Description:</div>
                        <p>{modalCurrentTechniqueInfoIsNotNull ?
                            <textarea type='text' size='50' value={this.props.modalCurrentTechniqueInfo.techDesc} /> : '' }
                        </p>   
                    </div>
                    <div className="ui small image">
                        <img src="/images/avatar/large/chris.jpg" />
                    </div>
                </div>
                <div className="actions">
                    <div className="ui black deny button" onClick={this.handleCloseModal.bind(this)}>
                        Cancel
                    </div>
                    <div className="ui positive right labeled icon button">
                        Save
                    <i className="checkmark icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}

// Subscription to get technique info based on which modalTechId is passed
export default createContainer((props) => {
  Meteor.subscribe('techniques');

  return { modalCurrentTechniqueInfo: Techniques.findOne({ 'techId': props.modalTechId }) };
}, EditTechniqueModal);