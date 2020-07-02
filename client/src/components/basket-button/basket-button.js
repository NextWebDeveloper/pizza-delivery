import React, { Fragment } from 'react';
import {
	Link
} from 'react-router-dom'
import { connect } from 'react-redux'

import './basket-button.css';

const BasketButton = ({cart}) => {

    let cartItemsQuantity = 0;
    
    for (let i in cart) {
        cartItemsQuantity += cart[i]
    }

    const buttonInfo = cartItemsQuantity > 0 ? (
        <Fragment>
            <span className="header-basket-button__divider"></span>
            <span className="header-basket-button__quantity">{cartItemsQuantity.toString()}</span>
        </Fragment>
    ) : null

    return (
        <div className="header-basket-wrapper">
            <Link 
                className="header-basket-button"
                to="/cart">
                <span>Cart</span>
                {buttonInfo}
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
	return { cart: state.cart }
}

export default connect(
    mapStateToProps
)(BasketButton)
