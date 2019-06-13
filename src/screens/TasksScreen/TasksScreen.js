import React, { useCallback, } from 'react'
import { Text, View, ScrollView, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { Icon, TouchableButton, } from '../../components'
import { TASK_NAMES_LIST, MOVEMENT_FUNC_NAMES, } from '../../constants'
import styles from './style'

const TasksScreen = ({ componentId, changeScreen, }) => {
  const openSettings = useCallback(() => {
    changeScreen(MOVEMENT_FUNC_NAMES.settings, componentId)
  }, [componentId])

  const openStatistic = useCallback(() => {
    changeScreen(MOVEMENT_FUNC_NAMES.statistic, componentId)
  }, [componentId])

  const generateTasks = taskList => taskList.map((task) => {
    const toCurrentTask = useCallback(() => {
      changeScreen(MOVEMENT_FUNC_NAMES.task, componentId, task)
    }, [componentId, task])

    return (
      <TouchableButton
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
