import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { aboutPageReducer, pageFooter, homePageReducer, joinPageReducer } from './publicPagesReducer'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    homePage: homePageReducer,
    aboutPage: aboutPageReducer,
    joinPage: joinPageReducer,
    pageFooter: pageFooter
})

export const store = createStore(rootReducer, composeWithDevTools());