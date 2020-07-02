const SET_MENU = 'SET_MENU'

export default (state = {}, action) => {
	switch (action.type) {
		case SET_MENU:
			const newState = {}
			for (let i in action.menu) {
				newState[Object.keys(action.menu[i])[0]] = Object.values(action.menu[i])[0]
			}
			return {
				...state,
				...newState
			}
		default:
			return state
	}
}

export const setMenu = (menu) => {
	return dispatch => {
		dispatch({
			type: SET_MENU, 
			menu
		})
	}
}

