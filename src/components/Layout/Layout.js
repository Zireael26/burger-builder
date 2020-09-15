import React, {Fragment} from "react";
import CssClasses from "./Layout.module.css"
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => (
    <Fragment>
        <Toolbar/>
        <main className={CssClasses.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default Layout;