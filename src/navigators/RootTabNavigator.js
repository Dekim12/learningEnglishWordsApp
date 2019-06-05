import { createBottomTabNavigator, createAppContainer, } from 'react-navigation'
import {
  TagsScreensNavigator,
  WordsScreensNavigator,
  TasksScreenNavigator,
} from './index'
import {
  ROOT_WORDS_SCREEN,
  ROOT_TAGS_SCREEN,
  ROOT_TASKS_SCREEN,
} from '../constants'
import { defineTabBarIcons, } from '../utils/navigationUtils'

const RootTabNavigator = createBottomTabNavigator(
  {
    [ROOT_WORDS_SCREEN]: WordsScreensNavigator,
    [ROOT_TAGS_SCREEN]: TagsScreensNavigator,
    [ROOT_TASKS_SCREEN]: TasksScreenNavigator,
  },
  {
    resetOnBlur: true,
    defaultNavigationOptions: ({ navigation, }) => ({
      tabBarIcon: defineTabBarIcons.bind(null, navigation),
    }),
    tabBarOptions: {
      activeTintColor: '#FF4F1B',
      activeBackgroundColor: '#2d273f',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: '#100E17',
      style: {
        height: 55,
      },
      tabStyle: {
        height: 55,
      },
      labelStyle: {
        fontSize: 14,
        fontFamily: 'Norwester',
      },
    },
  }
)

export default createAppContainer(RootTabNavigator)
