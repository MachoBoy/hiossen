import React, { Component } from 'react';
import SideBar from './SideBar';
import Header from './Header';

class Main extends Component {
    render() {
        return (
            <div className="main" >
                <Header />
                
                <div style={styles.mainStyle}>
                This is the MAIN!22S
                </div>
                {/* <SideBar /> */}
            </div>
        );
    }
}

const drawerWidth = 245;
const styles = {
    mainStyle: {
        position: 'absolute',
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        marginTop: '60px',
    },
    
}

export default Main;