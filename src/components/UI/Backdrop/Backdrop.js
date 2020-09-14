import React from "react";
import CssClasses from "./Backdrop.module.css";

const Backdrop = (props) => (
    props.show ? <div className={CssClasses.Backdrop} onClick={props.clicked}/> : null
);

export default Backdrop;