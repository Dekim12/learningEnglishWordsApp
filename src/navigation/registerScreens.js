import { Navigation, } from 'react-native-navigation'
import { WrappedComponent, } from '../utils/rnnUtils'
import {
  WordsScreen,
  TasksScreen,
  TagsScreenContainer,
  NewWordScreen,
  WordDescriptionContainer,
  EditWordContainer,
  TagDetailsContainer,
  EditTagContainer,
  SettingsContainer,
  StatisticsContainer,
  CurrentTaskContainer,
} from '../screens'

import {
  ROOT_WORDS_SCREEN,
  ROOT_TAGS_SCREEN,
  ROOT_TASKS_SCREEN,
  NEW_WORD_SCREEN,
  WORDS_DETAILS_SCREEN,
  EDIT_WORD_SCREEN,
  TAG_DETAILS_SCREEN,
  EDIT_TAG_SCREEN,
  SETTINGS_SCREEN,
  STATISTIC_SCREEN,
  CURRENT_TASK_SCREEN,
} from '../constants'

const registerScreens = () => {
  Navigation.registerComponent(ROOT_WORDS_SCREEN, () => WrappedComponent(WordsScreen))
  Navigation.registerComponent(ROOT_TAGS_SCREEN, () => WrappedComponent(TagsScreenContainer))
  Navigation.registerComponent(ROOT_TASKS_SCREEN, () => TasksScreen)
  Navigation.registerComponent(NEW_WORD_SCREEN, () => NewWordScreen)
  Navigation.registerComponent(WORDS_DETAILS_SCREEN, () => WrappedComponent(WordDescriptionContainer))
  Navigation.registerComponent(EDIT_WORD_SCREEN, () => WrappedComponent(EditWordContainer))
  Navigation.registerComponent(TAG_DETAILS_SCREEN, () => WrappedComponent(TagDetailsContainer))
  Navigation.registerComponent(EDIT_TAG_SCREEN, () => WrappedComponent(EditTagContainer))
  Navigation.registerComponent(SETTINGS_SCREEN, () => WrappedComponent(SettingsContainer))
  Navigation.registerComponent(STATISTIC_SCREEN, () => WrappedComponent(StatisticsContainer))
  Navigation.registerComponent(CURRENT_TASK_SCREEN, () => WrappedComponent(CurrentTaskContainer))
}

export default registerScreens