import React from 'react'
import { StyleSheet, } from 'react-native'
import { Icon, } from '../components'
import {
  ROOT_WORDS_SCREEN,
  ROOT_TAGS_SCREEN,
  ROOT_TASKS_SCREEN,
} from '../constants'

export const defineTabBarIcons = (navigation, { tintColor, }) => {
  const { routeName, } = navigation.state
  let styleForTasks = null
  let iconName

  if (routeName === ROOT_WORDS_SCREEN) {
    iconName = 'star'
  } else if (routeName === ROOT_TAGS_SCREEN) {
    iconName = 'tasks'
  } else if (routeName === ROOT_TASKS_SCREEN) {
    iconName = 'edit'
    styleForTasks = styles.tasksTag
  }

  return (
    <Icon
      name={iconName}
      size={25}
      color={tintColor}
      style={[styles.icon, styleForTasks]}
    />
  )
}

const styles = StyleSheet.create({
  icon: { fontSize: 28, },
  tasksTag: { paddingLeft: 7, },
})
