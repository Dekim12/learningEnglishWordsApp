// @flow

type StringsList = Array<string> | []

export type WordObj = {
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
  wordsList: Array<WordObj> | []
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

//words actions
type WordActionPayload =
  | string
  | number
  | WordObj
  | { prevName: string, newName: string, deletedWordList: Array<number> | [] }

export type WordAction = {
  type: string,
  payload: WordActionPayload
}

//tags actions
type TagActionPayload = string | { prevName: string, newName: string }

export type TagAction = {
  type: string,
  payload: TagActionPayload
}

//tasks actions
type TaskActionPayload =
  | SettingsObj
  | { allAnswers: number, rightAnswers: number }

export type TasksAction = {
  type: string,
  payload: TaskActionPayload
}
