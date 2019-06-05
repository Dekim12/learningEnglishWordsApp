import { createStackNavigator, } from 'react-navigation'
import {
  TagDetailsContainer,
  EditTagContainer,
  TagsScreenContainer,
} from '../redux/containers'
import {
  ROOT_TAGS_SCREEN,
  TAG_DETAILS_SCREEN,
  EDIT_TAG_SCREEN,
} from '../constants'

export const TagsScreensNavigator = createStackNavigator(
  {
    [ROOT_TAGS_SCREEN]: TagsScreenContainer,
    [TAG_DETAILS_SCREEN]: TagDetailsContainer,
    [EDIT_TAG_SCREEN]: EditTagContainer,
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
