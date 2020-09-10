import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import CssClasses from "./Burger.module.css";

const Burger = (props) => {
    return (
        <div className={CssClasses.Burger}>
            <BurgerIngredient ingredientType="bread-top"/>
            <BurgerIngredient ingredientType="cheese"/>
            <BurgerIngredient ingredientType="meat"/>
            <BurgerIngredient ingredientType="cheese"/>
            <BurgerIngredient ingredientType="bread-bottom"/>
        </div>
    );
};

export default Burger;