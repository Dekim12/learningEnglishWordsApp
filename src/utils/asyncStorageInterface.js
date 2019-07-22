// @flow

import AsyncStorage from '@react-native-community/async-storage'
import { ASYNC_STORAGE_KEYS, } from '../constants'
import type { WordObjType, } from '../flowAliases'
import type { TasksState, } from '../redux/reducers/tasksReducer'

type InterfaceType = {
  setData: (
    wordsList: Array<WordObjType>,
    tagsList: Array<string>,
    settings: ?TasksState
  ) => Promise<void>,
  getWords: () => Promise<?Array<WordObjType>>,
  getTags: () => Promise<?Array<string>>,
  getSettings: () => Promise<?TasksState>,
  getKeys: () => Promise<?Array<string>>
}

export const asyncStorageInterface: InterfaceType = {
  setData: async (wordsList, tagsList, settings) => {
    const wordsKeyValue: Array<string> = [
      ASYNC_STORAGE_KEYS.words,
      JSON.stringify(wordsList)
    ]
    const tagsKeyValue: Array<string> = [
      ASYNC_STORAGE_KEYS.tags,
      JSON.stringify(tagsList)
    ]
    const settingsKeyValue: Array<string> = [
      ASYNC_STORAGE_KEYS.settings,
      JSON.stringify(settings)
    ]

    try {
      await AsyncStorage.multiSet([
        wordsKeyValue,
        tagsKeyValue,
        settingsKeyValue
      ])
    } catch (error) {
      alert(error)
    }
  },
  getWords: async () => {
    try {
      const data: string = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.words)

      return JSON.parse(data)
    } catch (error) {
      alert(error)
    }
  },
  getTags: async () => {
    try {
      const data: string = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.tags)

      return JSON.parse(data)
    } catch (error) {
      alert(error)
    }
  },
  getSettings: async () => {
    try {
      const data: string = await AsyncStorage.getItem(
        ASYNC_STORAGE_KEYS.settings
      )

      return JSON.parse(data)
    } catch (error) {
      alert(error)
    }
  },
  getKeys: async () => {
    let keys: Array<string> = []
    try {
      keys = await AsyncStorage.getAllKeys()

      return keys
    } catch (error) {
      alert(error)
    }
  },
}
