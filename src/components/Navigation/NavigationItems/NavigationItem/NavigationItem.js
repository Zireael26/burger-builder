import React from "react";
import CssClasses from "./NavigationItem.module.css";

const NavigationItem = (props) => (
    <li className={CssClasses.NavigationItem}>
        <a
            href={props.link}
            className={props.active ? CssClasses.active : null}
        >{props.children}
        </a>
    </li>
);

export default NavigationItem;