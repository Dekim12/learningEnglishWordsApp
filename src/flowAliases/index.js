// @flow
import type { TasksState, } from '../redux/reducers/tasksReducer'
import type { TagsState, } from '../redux/reducers/tagsReducer'
import type { WordsState, } from '../redux/reducers/wordsReducer'

export type WordObjType = {
  id: number,
  word: string,
  transcription: string,
  translation: Array<string>,
  url: ?string,
  examples: Array<string>,
  tagName: string
}

export type SettingsObj = {
  +allTags: boolean,
  +amountOfWords: number,
  +random: boolean,
  +tagsForTask: Array<string>
}

export type VoidFunction = () => void

export type RootState = {
  wordsDataState: WordsState,
  tagsState: TagsState,
  tasksState: TasksState
}

export type ReduxAction = {
  type: string
}

export type DeviceInfoType = {
  OS?: string,
  'OS version'?: string,
  'API level'?: string,
  Type?: string,
  Name?: string,
  Model?: string,
  Brand?: string,
  Country?: string,
  Manufacturer?: string,
  Timezone?: string,
  'Battery level'?: string,
  'App name'?: string,
  'App was installed'?: string,
  'Is camera'?: boolean,
  'Is airplane mode'?: boolean,
  'Is emulator'?: boolean
}
