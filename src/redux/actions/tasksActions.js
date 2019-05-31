import { SET_SETTINGS, } from '../../constants'

export const setSettings = settingsObject => ({
  type: SET_SETTINGS,
  payload: settingsObject,
})
