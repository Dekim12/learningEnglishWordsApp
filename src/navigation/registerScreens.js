import { Navigation, } from 'react-native-navigation'
import { WrappedComponent, } from '../utils/rnnUtils'
import {
  WordsScreen,
  TasksScreen,
  TagsScreenContainer,
  NewWordScreen,
  WordDescriptionContainer,
  EditWordContainer,
} from '../screens'

import {
  ROOT_WORDS_SCREEN,
  ROOT_TAGS_SCREEN,
  ROOT_TASKS_SCREEN,
  NEW_WORD_SCREEN,
  WORDS_DETAILS_SCREEN,
  EDIT_WORD_SCREEN,
} from '../constants'

const registerScreens = () => {
  Navigation.registerComponent(ROOT_WORDS_SCREEN, () => WrappedComponent(WordsScreen))
  Navigation.registerComponent(ROOT_TAGS_SCREEN, () => WrappedComponent(TagsScreenContainer))
  Navigation.registerComponent(ROOT_TASKS_SCREEN, () => TasksScreen)
  Navigation.registerComponent(NEW_WORD_SCREEN, () => NewWordScreen)
  Navigation.registerComponent(WORDS_DETAILS_SCREEN, () => WrappedComponent(WordDescriptionContainer))
  Navigation.registerComponent(EDIT_WORD_SCREEN, () => WrappedComponent(EditWordContainer))
}

export default registerScreens
