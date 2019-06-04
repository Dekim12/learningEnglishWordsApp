import { SET_SETTINGS, SET_ANSWERS, } from '../../constants'

export const setSettings = settingsObject => ({
  type: SET_SETTINGS,
  payload: settingsObject,
})

export const setAnswers = (allAnswers, rightAnswers) => ({
  type: SET_ANSWERS,
  payload: { allAnswers, rightAnswers, },
})
