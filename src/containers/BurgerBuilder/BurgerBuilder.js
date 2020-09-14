import React, {Component, Fragment} from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    "salad": 25,
    "cheese": 30,
    "meat": 50,
    "bacon": 40
};

class BurgerBuilder extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //
    //     }
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 100,
        purchasable: false,
        ordered: false,
    }

    cancelOrderHandler = () => {
        this.setState({ordered: false});
    }

    continuePurchaseHandler = () => {
        alert("Order Confirmed!");
    }

    acceptOrderHandler = () => {
        this.setState({ordered: true});
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map((ingKey) => {
            return ingredients[ingKey];
        }).reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        }, 0);

        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];

        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];

        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - priceDeduction;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Fragment>
                <Modal show={this.state.ordered}
                       modalClosed={this.cancelOrderHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  orderCancelled={this.cancelOrderHandler}
                                  orderConfirmed={this.continuePurchaseHandler}
                                  totalPrice={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    price={this.state.totalPrice}
                    disabled={disabledInfo}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    purchasable={this.state.purchasable}
                    ordered={this.acceptOrderHandler}
                />
            </Fragment>
        );
    }
}

export default BurgerBuilder;