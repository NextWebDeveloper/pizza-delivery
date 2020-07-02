import React, { useState, useEffect, Fragment } from 'react';
import { history } from '../../store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    clearCart
} from '../../modules/cart'
import {
	Link
} from 'react-router-dom'

import './Checkout.css'

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import loader from '../../assets/loader.svg';

const Checkout = ({ clearCart, cart }) => {

    useEffect(() => {
        if (Object.keys(cart).length === 0) {
            history.push('/cart')
        }
    }, [])

    const [formSucceed, setFormSucceed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        address: '',
        name: '',
        surname: ''
    });

    const [validationErrors, setValidationErrors] = useState({
        address: false,
        name: false,
        surname: false
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i in validationErrors) {
            setValidationErrors((validationErrors) => ({
                ...validationErrors,
                [i]: formData[i] ? false : true
            }));
        }

        if (formData.address && formData.name && formData.surname) {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
                setFormSucceed(true)
                clearCart();
            }, 2000)
            
        }

    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setValidationErrors({
            ...validationErrors,
            [e.target.name]: e.target.value.length > 0 ? false : true
        });
    }

    const inputs = ['address', 'name', 'surname'].map(field => {
        return (
            <Box mb={3} key={field}>
                <TextField
                    value={formData[field] || ''}
                    error={validationErrors[field]}
                    name={field}
                    fullWidth
                    label={`Your ${field}`}
                    variant="outlined"
                    helperText={`${validationErrors[field] ? `Enter your ${field}` : ''}`}
                    onChange={handleInputChange} />
            </Box>
        )
    })

    const orderForm = (
        <form
            onSubmit={handleSubmit}>
            <h2>Fill the form to confirm the order.</h2>
            {inputs}
            <button className="checkout-button">Сonfirm the order</button>
        </form>
    )

    const orderReceived = (
        <Fragment>
            <h2 className="success-title">Your order has been received! Bon appetit!</h2>
            <Link to="/" className="cart-btn cart-btn_back-menu">
                Back to menu
            </Link>
        </Fragment>
    )

    const loaderElem = (
        <Box className="loader-wrapper">
            <img className="loader" src={loader} alt="loader" />
        </Box>
    )

    return (
        <Container maxWidth="sm">
            {formSucceed ? orderReceived : isLoading ? loaderElem : orderForm}
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            clearCart
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);