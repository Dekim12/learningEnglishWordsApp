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
} from '../constants'

export const WordsScreensNavigator = createStackNavigator(
  {
    [ROOT_WORDS_SCREEN]: WordsScreen,
    [WORDS_DETAILS_SCREEN]: WordDescriptionContainer,
    [NEW_WORD_SCREEN]: NewWordScreen,
    [EDIT_WORD_SCREEN]: EditWordContainer,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#100E17',
        height: 42,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 30,
        fontFamily: 'FFF_Tusj',
      },
    },
  }
)
