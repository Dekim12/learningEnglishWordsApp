import {
  FindTranslation,
  FindUsingTranslation,
  FindUsingImage,
} from '../components/Tasks'

export const TASK_NAMES_LIST = [
  'Find the translation',
  'Find the word using a translation',
  'Find the word using an images'
]

export const TASK_LIST = {
  'Find the translation': FindTranslation,
  'Find the word using a translation': FindUsingTranslation,
  'Find the word using an images': FindUsingImage,
}
