import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    removeItemFromCart
} from '../../modules/cart'

import './cart-item.css'
import removeIcon from '../../assets/remove-icon.svg'

import CartStepper from '../cart-stepper'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const CartItem = ({ item, quantity, removeItemFromCart }) => {

    const { name, image, priceDollar, priceEuro, id } = item;

    const calculatePrice = (quantity, price) => {
        return (parseInt(quantity) * parseFloat(price)).toFixed(1).replace(/\.0+$/,'')
    }

    return (
        <Grid 
            className="cart-item"
            container>
            <Grid item xs={12} sm={6}>
                <Box 
                    display="flex"
                    alignItems="center">
                    <img 
                        className="cart-item__img"
                        src={image}
                        alt={name}/>
                    <span className="cart-item__title">{name}</span>    
                </Box>
                
            </Grid>
            <Grid item xs={12} sm={3}>
                <Box 
                    height={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center">
                    <CartStepper id={id}></CartStepper>
                </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Box 
                    height={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center">
                    <div className="cart-item-price">{calculatePrice(quantity, priceDollar)}$ | {calculatePrice(quantity, priceEuro)}€</div>
                    <button 
                        onClick={() => removeItemFromCart(id)}
                        className="cart-item-remove">
                        <img src={removeIcon} alt="remove item"/>
                    </button>
                </Box>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({  })

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            removeItemFromCart
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);