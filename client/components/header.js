/**
 * Created by Scott on 11/6/2016.
 */
import React, { Component } from 'react';
import Accounts from './accounts';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">
                    AJJ App
                </Link>
                <Link to="beltlist" className="item">
                    Belt List
                </Link>
                <a className="item">
                    <Accounts />
                </a>
            </div>
        );
    }
}

export default Header;
