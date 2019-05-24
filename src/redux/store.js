import { createStore, } from 'redux'
// import axios from 'axios'
// import axiosMiddleware from 'redux-axios-middleware'
// import { composeWithDevTools, } from 'redux-devtools-extension'
import rootReducer from './reducers'

const store = createStore(rootReducer)

export default store
