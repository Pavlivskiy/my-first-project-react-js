import React, { Component } from 'react';
import '../css/App.css';

class Header extends Component {
    render() {
        return(
            <header className="App-header">
                <h1 className="brand">My tasks</h1>
            </header>
        );
    }
}

export default Header;