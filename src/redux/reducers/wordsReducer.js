import { fakeData, } from '../../constants'

const initialState = {
  wordsList: fakeData,
}

const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TYPE':
      return { wordsList: [1, 2, 3], }
    default:
      return state
  }
}

export default wordsReducer
