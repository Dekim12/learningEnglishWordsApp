import React from 'react'
import { createBottomTabNavigator, createAppContainer, } from 'react-navigation'
import { TasksScreen, } from '../screens'
import { WordsScreensNavigator, TagsScreensNavigator, } from './index'
import { Icon, } from '../components'

const RootTabNavigator = createBottomTabNavigator(
  {
    Words: {
      screen: WordsScreensNavigator,
    },
    Tags: {
      screen: TagsScreensNavigator,
    },
    Tasks: {
      screen: TasksScreen,
    },
  },
  {
    resetOnBlur: true,
    defaultNavigationOptions: ({ navigation, }) => ({
      tabBarIcon: ({ tintColor, }) => {
        const { routeName, } = navigation.state
        let styleForTasks = null
        let iconName

        if (routeName === 'Words') {
          iconName = 'star'
        } else if (routeName === 'Tags') {
          iconName = 'tasks'
        } else if (routeName === 'Tasks') {
          iconName = 'edit'
          styleForTasks = { paddingLeft: 7, }
        }

        return (
          <Icon
            name={iconName}
            size={25}
            color={tintColor}
            style={[{ fontSize: 28, }, styleForTasks]}
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
