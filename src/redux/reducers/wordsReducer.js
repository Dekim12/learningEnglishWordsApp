import { fakeData, DELETE_WORD, EDIT_WORD, } from '../../constants'

const initialState = {
  wordsList: fakeData,
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
    default:
      return state
  }
}

export default wordsReducer
