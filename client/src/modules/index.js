import menuReducer from './menu'
import cartReducer from './cart'

import { combineReducers } from 'redux'
    
const rootReducer = combineReducers({
    menu: menuReducer,
    cart: cartReducer
});

export default rootReducer