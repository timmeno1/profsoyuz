import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { homePageReducer } from './publicPagesReducer'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    homePage: homePageReducer,

})

export const store = createStore(rootReducer, composeWithDevTools());