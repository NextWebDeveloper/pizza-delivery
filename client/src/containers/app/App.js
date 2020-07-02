import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    setMenu
} from '../../modules/menu'
import {
	Route,
	Switch
} from 'react-router-dom'

import './App.css'

import apiGet from '../../api'

import Header from '../../components/header'
import Menu from '../../pages/Menu'
import Cart from '../../pages/Cart'
import Checkout from '../../pages/Checkout'

import Container from '@material-ui/core/Container';

const App = ({setMenu, cart}) => {

	useEffect(() => {
		Promise.all([apiGet('pizzas'), apiGet('drinks')]).then(res => setMenu(res))
	}, [])

	return (
		<div>
			<Container className="root" maxWidth="lg">
				<Header></Header>
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Menu></Menu>
						</Route>
						<Route exact path="/cart">
							<Cart></Cart>
						</Route>
						<Route exact path="/checkout">
							<Checkout/>
						</Route>
					</Switch>
				</div>
			</Container >
		</div>
	);
}

const mapStateToProps = state => {
	return { cart: state.cart }
}

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setMenu
		},
		dispatch
	)

export default connect(mapStateToProps, mapDispatchToProps)(App);
