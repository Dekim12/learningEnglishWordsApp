// @flow

import { SET_SETTINGS, SET_ANSWERS, } from '../../constants'
import type { SettingsObj, TasksAction, } from '../../flowAliases'

export const setSettings = (settingsObject: SettingsObj): TasksAction => ({
  type: SET_SETTINGS,
  payload: settingsObject,
})
export const setAnswers = (
  allAnswers: number,
  rightAnswers: number
): TasksAction => ({
  type: SET_ANSWERS,
  payload: { allAnswers, rightAnswers, },
})
