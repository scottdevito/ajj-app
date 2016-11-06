import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount() {
    // Render Blaze accounts from then find div that was
    // rendered in 'render' method and place Blaze accounts form
    // in that div
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {
    // Find the forms created and destroy them
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;
