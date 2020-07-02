import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	Link
} from 'react-router-dom'

import './Cart.css'

import Container from '@material-ui/core/Container';
import CartItem from '../../components/cart-item'
import DeliveryItem from '../../components/delivery-item'

import Box from '@material-ui/core/Box'

const Cart = ({ cart, menu }) => {

    let totalPriceDollar = 10;
    let totalPriceEuro = 8.9;

    const calculatePrice = (quantity, price) => {
        return (parseInt(quantity) * parseFloat(price))
    }

    const cartItems = Object.keys(cart).map(id => {

        const quantity = cart[id]

        const item = [...menu.drinks, ...menu.pizzas].find(x => x.id == id);

        totalPriceDollar += calculatePrice(quantity, item.priceDollar);
        totalPriceEuro += calculatePrice(quantity, item.priceEuro);

        return <CartItem item={item} key={item.id} quantity={quantity}></CartItem>
    })

    const cartWithItems = (
        <Container maxWidth="md">
            <h1 className="cart-title">Your cart</h1>
            <div className="cart-list">
                {cartItems}
                <DeliveryItem></DeliveryItem>
            </div>
            <div className="cart-bottom">
                <Box 
                    display="flex"
                    justifyContent="flex-end"
                    py={3}>
                    <div className="cart-total">
                        <span className="cart-total__label">
                            Order price:
                        </span>
                        <span className="cart-total__quantity">
                            {totalPriceDollar.toFixed(1).replace(/\.0+$/,'')}$ | {totalPriceEuro.toFixed(1).replace(/\.0+$/,'')}€
                        </span>
                    </div>
                </Box>
                <Box 
                    display="flex"
                    justifyContent="space-between">
                        <Link to="/" className="cart-btn cart-btn_back-menu">
                            Back to menu
                        </Link>
                        <Link to="/checkout" className="cart-btn cart-btn_make-order">
                            Make the order
                        </Link>
                    </Box>
            </div>
        </Container>
    )

    const cartWithoutItems = (
        <Container maxWidth="md">
            <h1 className="cart-title">Your cart is empty :(</h1>
            <Link to="/" className="cart-btn cart-btn_back-menu">
                Back to menu
            </Link>
        </Container>
    )

    return Object.keys(cart).length > 0 ? cartWithItems : cartWithoutItems
}

const mapStateToProps = state => {
    return { 
        cart: state.cart,
        menu: state.menu
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(Cart);