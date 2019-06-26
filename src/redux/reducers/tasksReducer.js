// @flow

import { SET_SETTINGS, SET_ANSWERS, } from '../../constants'
import type { TasksAction, } from '../../flowAliases'

type State = {
  +allTags: boolean,
  +tagsForTask: Array<string>,
  +amountOfWords: number,
  +random: boolean,
  +allAnswers: number,
  +rightAnswers: number
}

const initialState: State = {
  allTags: true,
  tagsForTask: [],
  amountOfWords: 5,
  random: false,
  allAnswers: 0,
  rightAnswers: 0,
}

const tasksReducer = (state: State = initialState, action: TasksAction) => {
  switch (action.type) {
    case SET_SETTINGS: {
      return { ...state, ...action.payload, }
    }
    case SET_ANSWERS: {
      const { allAnswers, rightAnswers, } = state

      const newAllAnswers: number = allAnswers + action.payload.allAnswers
      const newRightAnswers: number = rightAnswers + action.payload.rightAnswers

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
