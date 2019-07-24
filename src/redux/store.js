import { createStore, applyMiddleware, } from 'redux'
import thunk from 'redux-thunk'
// import axios from 'axios'
// import axiosMiddleware from 'redux-axios-middleware'
// import { composeWithDevTools, } from 'redux-devtools-extension'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
