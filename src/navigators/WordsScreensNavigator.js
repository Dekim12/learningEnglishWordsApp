import { createStackNavigator, } from 'react-navigation'
import {
  WordDescriptionContainer,
  EditWordContainer,
} from '../redux/containers'
import { WordsScreen, NewWordScreen, } from '../screens'
import {
  ROOT_WORDS_SCREEN,
  WORDS_DETAILS_SCREEN,
  NEW_WORD_SCREEN,
  EDIT_WORD_SCREEN,
  COMMON_STACK_NAVIGATOR_OPTIONS,
} from '../constants'

export const WordsScreensNavigator = createStackNavigator(
  {
    [ROOT_WORDS_SCREEN]: WordsScreen,
    [WORDS_DETAILS_SCREEN]: WordDescriptionContainer,
    [NEW_WORD_SCREEN]: NewWordScreen,
    [EDIT_WORD_SCREEN]: EditWordContainer,
  },
  {
    defaultNavigationOptions: COMMON_STACK_NAVIGATOR_OPTIONS,
  }
)
