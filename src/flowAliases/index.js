// @flow

type StringsList = Array<string>

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
  allTags: boolean,
  amountOfWords: number,
  random: boolean,
  tagsForTask: StringsList
}

export type VoidFunction = () => void

//state
export type WordState = {
  wordsList: Array<WordObjType>
}

export type TagsState = {
  tagsList: StringsList
}

export type TasksState = {
  allTags: boolean,
  tagsForTask: StringsList,
  amountOfWords: number,
  random: boolean,
  allAnswers: number,
  rightAnswers: number
}

export type RootState = {
  wordsDataState: WordState,
  tagsState: TagsState,
  tasksState: TasksState
}

type ReduxAction = {
  type: string
}

//words actions
type WordActionPayload =
  | string
  | number
  | WordObjType
  | { prevName: string, newName: string, deletedWordList: Array<number> }

export type WordAction = ReduxAction & {
  payload: WordActionPayload
}

//tags actions
type TagActionPayload = string | { prevName: string, newName: string }

export type TagAction = ReduxAction & {
  payload: TagActionPayload
}

//tasks actions
type TaskActionPayload =
  | SettingsObj
  | { allAnswers: number, rightAnswers: number }

export type TasksAction = ReduxAction & {
  payload: TaskActionPayload
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
