const SET_ITEM_TO_CART = 'SET_ITEM_TO_CART'
const INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY'
const DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY'
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'

export default (state = {}, action) => {
	switch (action.type) {
		case SET_ITEM_TO_CART:
			return {
				...state,
				[action.id]: 1
			}
		case REMOVE_ITEM_FROM_CART:
			const newState = {...state}
			delete newState[action.id]
			return newState
		case INCREASE_ITEM_QUANTITY:
			return {
				...state,
				[action.id]: ++state[action.id]
			}
		case DECREASE_ITEM_QUANTITY:
			const newQuantity = state[action.id] - 1;
			if (newQuantity > 0) {
				return {
					...state,
					[action.id]: newQuantity
				}
			} else {
				const newState = {...state}
				delete newState[action.id]
				return newState
			}
		case CLEAR_CART:
			return {}
		default:
			return state
	}
}

export const setItemToCart = (id) => {
	return dispatch => {
		dispatch({
			type: SET_ITEM_TO_CART, 
			id
		})
	}
}

export const removeItemFromCart = (id) => {
	return dispatch => {
		dispatch({
			type: REMOVE_ITEM_FROM_CART, 
			id
		})
	}
}

export const increaseItemQuantity = (id) => {
	return dispatch => {
		dispatch({
			type: INCREASE_ITEM_QUANTITY, 
			id
		})
	}
}

export const decreaseItemQuantity = (id) => {
	return dispatch => {
		dispatch({
			type: DECREASE_ITEM_QUANTITY, 
			id
		})
	}
}

export const clearCart = (id) => {
	return dispatch => {
		dispatch({
			type: CLEAR_CART, 
			id
		})
	}
}

