// @flow

import { SET_SETTINGS, SET_ANSWERS, } from '../../constants'
import type { SettingsObj, ReduxAction, } from '../../flowAliases'

type TaskActionPayload =
  | SettingsObj
  | { allAnswers: number, rightAnswers: number }

export type TasksAction = ReduxAction & {
  payload: TaskActionPayload
}

export type TasksState = {
  +allTags: boolean,
  +tagsForTask: Array<string>,
  +amountOfWords: number,
  +random: boolean,
  +allAnswers: number,
  +rightAnswers: number
}

export const initialState: TasksState = {
  allTags: true,
  tagsForTask: [],
  amountOfWords: 5,
  random: false,
  allAnswers: 0,
  rightAnswers: 0,
}

const tasksReducer = (
  state: TasksState = initialState,
  action: TasksAction
) => {
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
