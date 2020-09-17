import React from "react";
import CssClasses from "./DrawerToggle.module.css";

const DrawerToggle = (props) => (
    <div onClick={props.clicked} className={CssClasses.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle;