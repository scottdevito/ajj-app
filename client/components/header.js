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
            </div>
        );
    }
}

export default Header;
