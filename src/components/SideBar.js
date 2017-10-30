import React, { Component } from 'react';
import { Drawer } from 'material-ui';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    render() {
        return (
            <div className="DrawerRoot">
                <Drawer />
            </div>
        )
    }
}
export default SideBar;