// @flow

import type { Dispatch, } from 'redux'
import { SET_SETTINGS, SET_ANSWERS, } from '../../constants'
import { asyncStorageInterface, } from '../../utils/asyncStorageInterface'
import type { SettingsObj, } from '../../flowAliases'
import {
  initialState,
  type TasksAction,
  type TasksState,
} from '../reducers/tasksReducer'

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

export const getSettingsList = () => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    const response: ?TasksState = await asyncStorageInterface.getSettings()

    if (response && JSON.stringify(initialState) !== JSON.stringify(response)) {
      dispatch(setSettings(response))
    }
  } catch (error) {
    console.warn(error)
  }
}
