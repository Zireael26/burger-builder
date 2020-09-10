import React from "react";
import CssClasses from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

const BurgerIngredient = (props) => {
    let ingredient = null;

    switch (props.ingredientType) {
        case ("bread-bottom"):
            ingredient = <div className={CssClasses.BreadBottom}/>;
            break;
        case ("bread-top"):
            ingredient = (
                <div className={CssClasses.BreadTop}>
                    <div className={CssClasses.Seeds1}/>
                    <div className={CssClasses.Seeds2}/>
                </div>
            );
            break;
        case ("meat"):
            ingredient = <div className={CssClasses.Meat}/>;
            break;
        case ("cheese"):
            ingredient = <div className={CssClasses.Cheese}/>;
            break;
        case ("salad"):
            ingredient = <div className={CssClasses.Salad}/>;
            break;
        case ("bacon"):
            ingredient = <div className={CssClasses.Bacon}/>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

BurgerIngredient.propTypes = {
    ingredientType: PropTypes.string.isRequired
};

export default BurgerIngredient;