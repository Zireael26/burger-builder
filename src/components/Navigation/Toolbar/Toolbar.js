import React from "react";
import CssClasses from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../NavigationItems/SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => (
    <header className={CssClasses.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={CssClasses.Logo}>
            <Logo/>
        </div>
        <nav className={CssClasses.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;