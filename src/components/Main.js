import React, { Component } from 'react';
import SideBar from './SideBar';

class Main extends Component {
    render() {
        return (
            <div className="main">
                This is the MAIN!
                <SideBar />
            </div>
        );
    }
}

export default Main;