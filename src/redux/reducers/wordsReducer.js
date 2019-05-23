import { fakeData, DELETE_WORD, } from '../../constants'

const initialState = {
  wordsList: fakeData,
}

const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_WORD: {
      const newList = state.wordsList.filter(word => word.id !== action.payload)
      return { ...state, wordsList: newList, }
    }

    default:
      return state
  }
}

export default wordsReducer
