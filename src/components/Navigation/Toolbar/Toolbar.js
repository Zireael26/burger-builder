import React from "react";
import CssClasses from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const Toolbar = (props) => (
    <header className={CssClasses.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>
            <ul>
                ...
            </ul>
        </nav>
    </header>
);

export default Toolbar;