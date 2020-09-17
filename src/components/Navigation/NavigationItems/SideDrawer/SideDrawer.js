import React, {Fragment} from "react";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems";
import CssClasses from "./SideDrawer.module.css";
import Backdrop from "../../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
    const attachedClasses = [CssClasses.SideDrawer, CssClasses.Close];
    if(props.opened) {
        attachedClasses[1] = CssClasses.Open;
    }

    return (
        <Fragment>
            <Backdrop show={props.opened} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")}>
                <div className={CssClasses.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Fragment>
    );
};


export default SideDrawer;