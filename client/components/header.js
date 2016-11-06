/**
 * Created by Scott on 11/6/2016.
 */
import React, { Component } from 'react';
import Accounts from './accounts';

class Header extends Component {
    render() {
        return (
            <div className="ui secondary pointing menu">
                <a className="item">
                    AJJ App
                </a>
                <a className="item">
                    Belt List
                </a>
                <a className="item">
                    <Accounts />
                </a>
            </div>
        );
    }
}

export default Header;
