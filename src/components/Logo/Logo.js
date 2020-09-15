import React from "react";
import CssClasses from "./Logo.module.css";
import burgerLogo from "../../assets/images/burger-logo.png";

const Logo = (props) => (
    <div className={CssClasses.Logo}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default Logo;