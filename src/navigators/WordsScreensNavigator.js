import { createStackNavigator, } from 'react-navigation'
import {
  WordDescriptionContainer,
  EditWordContainer,
} from '../redux/containers'
import { WordsScreen, NewWordScreen, } from '../screens'

export const WordsScreensNavigator = createStackNavigator(
  {
    Words: WordsScreen,
    WordDetails: WordDescriptionContainer,
    NewWord: NewWordScreen,
    EditWord: EditWordContainer,
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
