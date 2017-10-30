import React, { Component } from 'react';
import SideBar from './SideBar';
import Header from './Header';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                    This is the MAIN!22S
                <SideBar />
            </div>
        );
    }
}

export default Main;