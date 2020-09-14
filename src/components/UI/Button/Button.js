import React from "react";
import CssClasses from "./Button.module.css";

const Button = (props) => (
    <button className={[CssClasses.Button, CssClasses[props.buttonType]].join(" ")}
            onClick={props.onClick}>
        {props.children}
    </button>
);

export default Button;