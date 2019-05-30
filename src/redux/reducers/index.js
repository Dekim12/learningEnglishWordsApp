import { combineReducers, } from 'redux'
import wordsReducer from './wordsReducer'
import tagsReducer from './tagsReducer'
import tasksReducer from './tasksReducer'

export default combineReducers({
  wordsDataState: wordsReducer,
  tagsState: tagsReducer,
  tasksState: tasksReducer,
})
