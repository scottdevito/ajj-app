import React, { Component } from 'react';

class EditTechniqueModal extends Component {
    render() {
        return(
            <div className="ui modal">
                <i className="close icon"></i>
                <div className="header">
                    Edit Technique #0000
                </div>
                <div className="image content">
                    <div className="description">
                    <div className="ui header">We've auto-chosen a profile image for you.</div>
                    <p>We've grabbed the following image from the image associated with your registered e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                    </div>
                </div>
                <div className="actions">
                    <div className="ui black deny button">
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

export default EditTechniqueModal;