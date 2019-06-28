// @flow

import React from 'react'
import type { Node, } from 'react'
import { Text, View, ScrollView, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { Icon, TouchableButton, } from '../../components'
import { TASK_NAMES_LIST, MOVEMENT_FUNC_NAMES, } from '../../constants'
import type { VoidFunction, } from '../../flowAliases'
import styles from './style'

type Props = {
  componentId: string,
  changeScreen: (functionName: string, ...args: Array<any>) => void
}

const TasksScreen = ({ componentId, changeScreen, }: Props) => {
  const openSettings: VoidFunction = React.useCallback(() => {
    changeScreen(MOVEMENT_FUNC_NAMES.settings, componentId)
  }, [componentId])

  const openStatistic: VoidFunction = React.useCallback(() => {
    changeScreen(MOVEMENT_FUNC_NAMES.statistic, componentId)
  }, [componentId])

  const generateTasks = (taskList: Array<string>): Array<Node> => taskList.map((task: string) => {
    const toCurrentTask: VoidFunction = React.useCallback(() => {
      changeScreen(MOVEMENT_FUNC_NAMES.task, componentId, task)
    }, [componentId, task])

    return (
      <TouchableButton
        testID='task-btn'
        key={uuidv4()}
        style={styles.taskLabel}
        onPress={toCurrentTask}
      >
        <Text style={styles.taskText}>{task}</Text>
      </TouchableButton>
    )
  })

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.btnBlock}>
        <TouchableButton onPress={openStatistic}>
          <Icon name='award' color='#ffaa00' style={styles.iconStyle} />
        </TouchableButton>
        <TouchableButton onPress={openSettings}>
          <Icon name='cogs' size={37} color='#606060' />
        </TouchableButton>
      </View>
      <View style={styles.taskBlock}>{generateTasks(TASK_NAMES_LIST)}</View>
    </ScrollView>
  )
}

export { TasksScreen, }
