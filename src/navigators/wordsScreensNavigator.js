import { createStackNavigator, } from 'react-navigation'
import { WordsScreen, WordDescriptionScreen, } from '../screens'

export const WordsScreensNavigator = createStackNavigator(
  {
    Words: {
      screen: WordsScreen,
    },
    WordDetails: {
      screen: WordDescriptionScreen,
    },
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
