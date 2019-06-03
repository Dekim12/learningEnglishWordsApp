import { SET_SETTINGS, } from '../../constants'

const initialState = {
  allTags: true,
  tagsForTask: [],
  amountOfWords: 10,
  random: false,
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTINGS: {
      return { ...state, ...action.payload, }
    }
    default:
      return state
  }
}

export default tasksReducer
