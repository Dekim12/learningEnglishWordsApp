import { createStackNavigator, } from 'react-navigation'
import { TagsScreen, } from '../screens'
import { TagDetailsContainer, EditTagContainer, } from '../redux/containers'

export const TagsScreensNavigator = createStackNavigator(
  {
    Tags: {
      screen: TagsScreen,
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
