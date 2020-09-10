import React, {Fragment} from "react";
import CssClasses from "./Layout.module.css"

const Layout = (props) => (
    <Fragment>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={CssClasses.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default Layout;