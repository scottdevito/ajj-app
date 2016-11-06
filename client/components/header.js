/**
 * Created by Scott on 11/6/2016.
 */
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="ui secondary pointing menu">
                <a className="item">
                    AJJ App
                </a>
                <a className="item">
                    Main Menu
                </a>
                <a className="item">
                    Sign In
                </a>
            </div>
        );
    }
}

export default Header;