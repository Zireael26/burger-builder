import React, {Component, Fragment} from "react";
import CssClasses from "./Layout.module.css"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/NavigationItems/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    };

    render() {
        return (
            <Fragment>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer opened={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={CssClasses.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;