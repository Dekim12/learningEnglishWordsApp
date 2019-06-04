import { SET_SETTINGS, SET_ANSWERS, } from '../../constants'

const initialState = {
  allTags: true,
  tagsForTask: [],
  amountOfWords: 5,
  random: false,
  allAnswers: 0,
  rightAnswers: 0,
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTINGS: {
      return { ...state, ...action.payload, }
    }
    case SET_ANSWERS: {
      const { allAnswers, rightAnswers, } = state

      const newAllAnswers = allAnswers + action.payload.allAnswers
      const newRightAnswers = rightAnswers + action.payload.rightAnswers

      return {
        ...state,
        allAnswers: newAllAnswers,
        rightAnswers: newRightAnswers,
      }
    }
    default:
      return state
  }
}

export default tasksReducer
