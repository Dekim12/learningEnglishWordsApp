import React from 'react'
import { createBottomTabNavigator, createAppContainer, } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/FontAwesome5'
import { TasksScreen, WordsScreen, TagsScreen, } from './screens'

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: WordsScreen,
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
        const IconComponent = Ionicons
        let iconName

        if (routeName === 'Home') {
          iconName = 'star'
        } else if (routeName === 'Tags') {
          iconName = 'tasks'
        } else if (routeName === 'Tasks') {
          iconName = 'edit'
          return (
            <IconComponent
              name='edit'
              size={25}
              color={tintColor}
              style={{ paddingLeft: 8, fontSize: 28, }}
            />
          )
        }

        return (
          <IconComponent
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
        paddingVertical: 3,
      },
      labelStyle: {
        fontSize: 12,
      },
    },
  }
)

export default createAppContainer(TabNavigator)

// tabBarOptions: {

//   labelStyle: {
//     fontSize: 12,
//     padding: 3,
//   },
// },
