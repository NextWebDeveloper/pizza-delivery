import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    setItemToCart
} from '../../modules/cart'

import './menu-item.css';

import CartStepper from '../cart-stepper'

const MenuItem = ({ cart, setItemToCart, item }) => {
    
    const { name, image, description, priceDollar, priceEuro, id } = item;

    const [isHovered, setIsHovered] = useState(false);

    const inCart = (id) => {
        return Object.keys(cart).includes(id.toString())
    }

    const itemManagement = inCart(id) ? <CartStepper id={id}/> : (
        <button 
                    onClick={() => setItemToCart(id)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="menu-item__to-basket">Choose</button>
    )

    return (
        <div className="menu-item">
            <img 
                className={`menu-item__img${isHovered ? ' menu-item__img_hovered' : ''}`} 
                src={image}/>
            <h2 
                className="menu-item__title">{name}</h2>
            <span 
                className="menu-item__description">{description}</span>
            <div 
                className="menu-item__bottom">
                <span 
                    className="menu-item__price">{priceDollar}$ | {priceEuro}€</span>
                {itemManagement}
                    
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { cart: state.cart }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setItemToCart
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);