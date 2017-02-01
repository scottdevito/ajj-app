/**
 * Created by Scott on 11/6/2016.
 */
import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {
    onBeltListClick(event) {
        event.preventDefault();

        // Hack to prevent url from becoming /technique/beltlist
        // (when navigating to beltlist from technique/:techId)
        let currentUrl = browserHistory.getCurrentLocation(this).pathname;
        (currentUrl !== "/beltlist") ? browserHistory.transitionTo("/beltlist") : '';
        browserHistory.push("/beltlist");
    }

    renderEditTechnique() {
        // Enable Edit Technique button on all technique routes
        let currentUrl = browserHistory.getCurrentLocation(this).pathname;

        if (currentUrl.includes("/technique/")) {
            return <div className="item">Edit Technique</div>;
        }
            return;

        // TODO Validate that techId is <= the number of techIds in db
    }

    render() {
        return (
            <div className="ui secondary pointing menu large">
                <Link to="/" className="item">
                    JJ Guide
                </Link>
                <a href="#" onClick={this.onBeltListClick.bind(this)} className="item">
                    Belt List
                </a>
                <a className="item">
                    Seminars
                </a>
                <a className="item">
                    Lesson Planner
                </a>
                <a className="item">
                    <Accounts />
                </a>
                <div className="right menu">
                  <div className="item ui simple left icon dropdown">
                    <i className="ellipsis vertical icon large"></i>
                    <div className="menu">
                      {this.renderEditTechnique()}
                      <div className="item">Admin Panel</div>
                    </div>
                  </div>
                </div>

            </div>
        );
    }
}

export default Header;
