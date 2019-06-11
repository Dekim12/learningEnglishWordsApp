import { Navigation, } from 'react-native-navigation'
import { WordsScreen, TasksScreen, } from '../screens'
import { WrappedComponent, } from '../utils/rnnUtils'
import { TagsScreenContainer, } from '../redux/containers'
import {
  ROOT_WORDS_SCREEN,
  ROOT_TAGS_SCREEN,
  ROOT_TASKS_SCREEN,
} from '../constants'

const registerScreens = () => {
  Navigation.registerComponent(ROOT_WORDS_SCREEN, () => WordsScreen)
  Navigation.registerComponent(ROOT_TAGS_SCREEN, () => WrappedComponent(TagsScreenContainer))
  Navigation.registerComponent(ROOT_TASKS_SCREEN, () => TasksScreen)
}

export default registerScreens
