import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    increaseItemQuantity,
    decreaseItemQuantity
} from '../../modules/cart'

import './cart-stepper.css';

const CartStepper = ({id, cart, increaseItemQuantity, decreaseItemQuantity}) => {

    return (
        <div className="cart-stepper">
            <button onClick={() => decreaseItemQuantity(id)}>-</button>
            <span>{cart[id]}</span>
            <button onClick={() => increaseItemQuantity(id)}>+</button>
        </div>
    )
}

const mapStateToProps = state => {
    return { cart: state.cart }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increaseItemQuantity,
            decreaseItemQuantity
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(CartStepper);