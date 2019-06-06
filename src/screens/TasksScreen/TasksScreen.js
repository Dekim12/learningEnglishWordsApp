import React, { Component, } from 'react'
import { Text, View, ScrollView, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { Icon, TouchableButton, } from '../../components'
import {
  TASK_NAMES_LIST,
  SETTINGS_SCREEN,
  STATISTIC_SCREEN,
  CURRENT_TASK_SCREEN,
} from '../../constants'
import styles from './style'

class TasksScreen extends Component {
  static navigationOptions = {
    title: 'Tasks',
  }

  toSettings = () => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate(SETTINGS_SCREEN)
  }

  toStatistic = () => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate(STATISTIC_SCREEN)
  }

  generateTasks = taskList => taskList.map((task) => {
    const toCurrentTask = () => {
      const {
        navigation: { navigate, },
      } = this.props

      navigate(CURRENT_TASK_SCREEN, { taskName: task, })
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
          <TouchableButton onPress={this.toStatistic}>
            <Icon
              name='award'
              size={40}
              color='#ffaa00'
              style={styles.iconStyle}
            />
          </TouchableButton>
          <TouchableButton onPress={this.toSettings}>
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
