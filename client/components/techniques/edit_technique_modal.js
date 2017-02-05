import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Techniques } from '../../../imports/collections/techniques';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class EditTechniqueModal extends Component {
    constructor(props) {
        super(props);

        // State to keep track of user input before submit
        this.state = {
            titleChanges: '',
            imageURLChanges: '',
            descriptionChanges: ''
        };
    }

    handleCloseModal() {
        // Set parent state to false
        this.props.onCloseModal();
    }

    onInputChange(inputId, content) {
        let stateToChange = `${inputId}Changes`;
        console.log(stateToChange);

        // Store content in this.state
        this.setState({
            [stateToChange]: content
        });

        console.log(this.state.descriptionChanges);
        console.log(this.state.imageURLChanges);
    }

    onSave() {
        Meteor.call('techniques.update', this.props.modalTechId, this.state);
    }

    render() {
        // Variable to keep track of when currentTechniqueInfo query is finished so its data can be rendered
        let modalCurrentTechniqueInfoIsNotNull = this.props.modalCurrentTechniqueInfo != null;
        
        return(
            <div className="ui modal">
                <i className="close icon" onClick={this.handleCloseModal.bind(this)}></i>
                <div className="header">
                    Edit Technique #{this.props.modalTechId}
                </div>
                <div className="image content">
                    <div className="description edit-technique-modal-description">
                        <div className="ui header">Title:</div>
                        <p>{modalCurrentTechniqueInfoIsNotNull ?
                            <input 
                                type='text' 
                                size='50' 
                                value={this.props.modalCurrentTechniqueInfo.techName}
                                onChange={this.onInputChange.bind(this, "title")} /> : '' }
                        </p>
                        <div className="ui header">Image URL:</div>
                        <p>{modalCurrentTechniqueInfoIsNotNull ?
                            <input 
                                type='text' 
                                size='50' 
                                value={this.props.modalCurrentTechniqueInfo.techImgURL}
                                onChange={this.onInputChange.bind(this, "imageURL")} /> : '' }
                        </p>                            
                        <div className="ui header">Description:</div>
                        {modalCurrentTechniqueInfoIsNotNull ? 
                            <CodeMirror 
                                options={{mode: 'markdown', lineNumbers: true}}
                                onChange={this.onInputChange.bind(this, "description")} />
                        : '' }
                    </div>
                    <div className="ui small image">
                        <img src="/images/avatar/large/chris.jpg" />
                    </div>
                </div>
                <div className="actions">
                    <div className="ui black deny button" onClick={this.handleCloseModal.bind(this)}>
                        Cancel
                    </div>
                    <div className="ui positive right labeled icon button" onClick={this.onSave.bind(this)}>
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