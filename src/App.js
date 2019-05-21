import React from 'react'
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'
import { Icon, } from './components'
import {
  TasksScreen,
  WordsScreen,
  TagsScreen,
  WordDescriptionScreen,
} from './screens'

const WordsScreensNavigator = createStackNavigator(
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

const RootTabNavigator = createBottomTabNavigator(
  {
    Words: {
      screen: WordsScreensNavigator,
    },
    Tags: {
      screen: TagsScreen,
    },
    Tasks: {
      screen: TasksScreen,
    },
  },
  {
    defaultNavigationOptions: ({ navigation, }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor, }) => {
        const { routeName, } = navigation.state
        let iconName

        if (routeName === 'Words') {
          iconName = 'star'
        } else if (routeName === 'Tags') {
          iconName = 'tasks'
        } else if (routeName === 'Tasks') {
          iconName = 'edit'
          return (
            <Icon
              name='edit'
              size={25}
              color={tintColor}
              style={{ paddingLeft: 7, fontSize: 28, }}
            />
          )
        }

        return (
          <Icon
            name={iconName}
            size={25}
            color={tintColor}
            style={{ fontSize: 28, }}
          />
        )
      },
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
