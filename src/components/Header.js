import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import SideBar from './SideBar';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.setState({ open: !this.state.open });
        console.log(this.state.open);
    }

    render() {
        return(
            <div className="appBarRoot">
                <AppBar color='accent' style={styles.appBarStyle}>
                    <Toolbar>
                        <Typography type="title" color="inherit" style={styles.flex}>
                            HIOSSEN
                        </Typography>
                        <Button color="contrast">Logout</Button>
                    </Toolbar>
                </AppBar>
                <SideBar />
            </div>
        )
    }
}
const drawerWidth = 240;
const styles = {
    appBarStyle: {
        position: 'absolute',
    },
    flex : {
        flex: 1,
    },
}

export default Header;