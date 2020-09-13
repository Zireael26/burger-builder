import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import CssClasses from "./Burger.module.css";

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, index) => {
                return <BurgerIngredient key={ingKey + index} ingredientType={ingKey}/>;
            });
        }).reduce((previousValue, currentValue) => {
            return previousValue.concat(currentValue);
        }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients.</p>;
    }
    return (
        <div className={CssClasses.Burger}>
            <BurgerIngredient ingredientType="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient ingredientType="bread-bottom"/>
        </div>
    );
};

export default Burger;