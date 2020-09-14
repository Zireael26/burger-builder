import React from "react";
import CssClasses from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"},

];

const BuildControls = (props) => (
    <div className={CssClasses.BuildControls}>
        <p>Current Price: <strong>Rs. {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                disabled={props.disabled[ctrl.type]}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}/>
        ))}
        <button
            className={CssClasses.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
        >ORDER NOW
        </button>
    </div>
);

export default BuildControls;