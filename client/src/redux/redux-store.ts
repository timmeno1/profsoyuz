import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { aboutPageReducer, homePageReducer, joinPageReducer } from './publicPagesReducer'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    homePage: homePageReducer,
    aboutPage: aboutPageReducer,
    joinPage: joinPageReducer
})

export const store = createStore(rootReducer, composeWithDevTools());