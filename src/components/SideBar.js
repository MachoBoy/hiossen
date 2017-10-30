import React, { Component } from 'react';
import { Drawer, List, Paper } from 'material-ui';

class SideBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { open } = this.props;
        return (
            <div className="DrawerRoot">
                <Drawer type="permanent" style={styles.drawerStyle}>
                    <Paper style={styles.paperStyle}>
                        <div style={styles.listStyle}>
                            <List>Doctor!!!!!!!!!!!!!!!!</List>
                            <List>Order</List>
                        </div>
                    </Paper>
                </Drawer>
            </div>
        )
    }
}

const drawerWidth = 240;
const styles = {
    paperStyle: {
        postion: 'absolute',
        height: '100%',
        width: drawerWidth,
    },

    listStyle: {
        marginTop: '70px',
        width: drawerWidth,
    },

    drawerStyle: {
        position: 'absolute',
        height: '100%',
        width: drawerWidth,
        zIndex: '5',
    }
}
export default SideBar;