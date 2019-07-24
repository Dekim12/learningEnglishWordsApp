export const EDIT_TYPES = {
  definition: 'definitionWord',
  transcription: 'wordTranscription',
  word: 'translationWord',
  string: 'exampleString',
  url: 'urlString',
  tag: 'tagString',
}

export const PERMISSION_QUESTIONS = {
  word: 'Are you sure you want to remove this word?',
  tag: 'Are you sure you want to remove this tag with all its words?',
}

export const MAX_COEFFICIENT = 100
export const SMALL_COEFFICIENT = 35
export const MAX_RATE_WIDTH = 292
export const ANSWER_DELAY = 500
export const COLOR_VALUES = { min: 50, max: 250, }
export const COUNT_WRONG_RANDOM_ANSWERS = {
  possible: 5,
  necessary: 3,
}
export const ROUNDING_DEGREE = 10
export const PERCENT_DIVIDER = 1000

export const START_DATE = 4
export const END_DATE = 15

export const MOVEMENT_FUNC_NAMES = {
  back: 'goBack',
  newWord: 'createNewWord',
  editWord: 'toEditWord',
  wordDescription: 'toWordDescription',
  statistic: 'toStatistic',
  settings: 'toSettings',
  task: 'openTask',
  editTag: 'toEditTag',
  tagDetails: 'toTagDetails',
}

export const DEVICE_INFO_PROPERTY_NAMES = {
  version: 'OS version',
  level: 'API level',
  battery: 'Battery level',
  appName: 'App name',
  appDate: 'App was installed',
  isCamera: 'Is camera',
  airplaneMode: 'Is airplane mode',
  isEmulator: 'Is emulator',
}

export const NET_CONNECTION_ID = 'NetConnectionOverlay'

export const ASYNC_STORAGE_KEYS = {
  words: 'words',
  tags: 'tags',
  settings: 'settings',
}
