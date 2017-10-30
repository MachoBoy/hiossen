import React, { Component } from 'react';
import { Drawer, Paper } from 'material-ui';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';
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
                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <MenuIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Account" />
                                </ListItem>
                            </List>
                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <MenuIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Order" />
                                </ListItem>
                            </List>
                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <MenuIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Order Hisotry" />
                                </ListItem>
                            </List>
                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <MenuIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Promotion" />
                                </ListItem>
                            </List>
                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <MenuIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Setting" />
                                </ListItem>
                            </List>
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
        postion: 'absolute',
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