import { createStackNavigator, } from 'react-navigation'
import {
  TagDetailsContainer,
  EditTagContainer,
  TagsScreenContainer,
} from '../redux/containers'

export const TagsScreensNavigator = createStackNavigator(
  {
    Tags: {
      screen: TagsScreenContainer,
    },
    TagDetails: {
      screen: TagDetailsContainer,
    },
    EditTag: {
      screen: EditTagContainer,
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
