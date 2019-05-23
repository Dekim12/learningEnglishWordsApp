import { combineReducers, } from 'redux'
import wordsReducer from './wordsReducer'
import tagsReducer from './tagsReducer'

export default combineReducers({
  wordsDataState: wordsReducer,
  tagsState: tagsReducer,
})
