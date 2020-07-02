import React from 'react';
import {
	Link
} from 'react-router-dom'

import './header.css';

import BasketButton from '../../components/basket-button'

import logo from '../../assets/pizza-logo.svg';

const Header = (props) => {

    return (
        <header className="header">
            <Link to="/" className="header-logo">
                <img className="header-logo__img" src={logo} alt="Pizza delivery logo"/>
                <h1 className="header-logo__title">Pizza Time!</h1>
            </Link>
            <BasketButton/>
        </header>
    )
}

export default Header;