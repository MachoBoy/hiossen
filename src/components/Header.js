import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    render() {
        return(
            <div className="appBarRoot">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Menu">

                        </IconButton>
                        <Typography type="title" color="inherit" style={styles.flex}>
                            HIOSSEN
                        </Typography>
                        <Button color="contrast" style={styles.justifyContent}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const styles = {
    logoutButton: {
        marginLeft: '50px',
    },
    flex : {
        flex: 1,
    }
}
export default Header;