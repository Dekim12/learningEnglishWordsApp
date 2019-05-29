import { sortBy, } from 'lodash'
import {
  fakeData,
  DELETE_WORD,
  EDIT_WORD,
  EDIT_WORDS_LIST,
} from '../../constants'

const initialState = {
  wordsList: sortBy(fakeData, data => data.word),
}

const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_WORD: {
      const newList = state.wordsList.filter(word => word.id !== action.payload)
      return { ...state, wordsList: newList, }
    }
    case EDIT_WORD: {
      const newList = state.wordsList.map((word) => {
        if (word.id === action.payload.id) {
          return action.payload
        }
        return word
      })
      return { ...state, wordsList: newList, }
    }
    case EDIT_WORDS_LIST: {
      const { prevName, newName, deletedWordList, } = action.payload

      const filteredList = state.wordsList.filter(
        word => deletedWordList.indexOf(word.id) === -1
      )

      filteredList.forEach((word) => {
        if (word.tagName === prevName) {
          word.tagName = newName
        }
      })

      return { ...state, wordsList: filteredList, }
    }
    default:
      return state
  }
}

export default wordsReducer
