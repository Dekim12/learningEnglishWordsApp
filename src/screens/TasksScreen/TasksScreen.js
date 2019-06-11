import React, { Component, } from 'react'
import { Text, View, ScrollView, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { Icon, TouchableButton, } from '../../components'
import { TASK_NAMES_LIST, } from '../../constants'
import styles from './style'

class TasksScreen extends Component {
  openSettings = () => {
    const { toSettings, componentId, } = this.props

    toSettings(componentId)
  }

  openStatistic = () => {
    const { toStatistic, componentId, } = this.props

    toStatistic(componentId)
  }

  generateTasks = taskList => taskList.map((task) => {
    const toCurrentTask = () => {
      // const {
      //   navigation: { navigate, },
      // } = this.props
      // navigate(CURRENT_TASK_SCREEN, { taskName: task, })
    }

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

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.btnBlock}>
          <TouchableButton onPress={this.openStatistic}>
            <Icon name='award' color='#ffaa00' style={styles.iconStyle} />
          </TouchableButton>
          <TouchableButton onPress={this.openSettings}>
            <Icon name='cogs' size={37} color='#606060' />
          </TouchableButton>
        </View>
        <View style={styles.taskBlock}>
          {this.generateTasks(TASK_NAMES_LIST)}
        </View>
      </ScrollView>
    )
  }
}

export { TasksScreen, }
