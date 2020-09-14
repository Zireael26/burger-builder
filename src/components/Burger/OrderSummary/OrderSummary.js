import React, {Fragment} from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((ingKey) => {
        return <li key={ingKey}>
            <span style={{textTransform: "capitalize"}}>{ingKey}</span>:
            {props.ingredients[ingKey]}
        </li>
    })
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: Rs. {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout</p>
            <Button onClick={props.orderCancelled} buttonType="Danger">CANCEL</Button>
            <Button onClick={props.orderConfirmed} buttonType="Success">CONTINUE</Button>
        </Fragment>
    );
};

export default OrderSummary;