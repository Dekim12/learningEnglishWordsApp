import React, { Component, } from 'react'
import { Text, View, ScrollView, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { Icon, TouchableButton, } from '../../components'
import { TASK_NAMES_LIST, } from '../../constants'
import styles from './style'

class TasksScreen extends Component {
  static navigationOptions = {
    title: 'Tasks',
  }

  toSettings = () => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate('Settings')
  }

  toStatistic = () => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate('Statistic')
  }

  generateTasks = taskList => taskList.map((task) => {
    const toCurrentTask = () => {
      const {
        navigation: { navigate, },
      } = this.props

      navigate('CurrentTask', { taskName: task, })
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
    const { container, btnBlock, } = styles

    return (
      <ScrollView
        style={container}
        contentContainerStyle={{ alignItems: 'center', }}
      >
        <View style={btnBlock}>
          <TouchableButton onPress={this.toStatistic}>
            <Icon
              name='award'
              size={40}
              color='#ffaa00'
              style={{ marginLeft: 3, }}
            />
          </TouchableButton>
          <TouchableButton onPress={this.toSettings}>
            <Icon name='cogs' size={37} color='#606060' />
          </TouchableButton>
        </View>
        <View style={{ marginBottom: 25, }}>
          {this.generateTasks(TASK_NAMES_LIST)}
        </View>
      </ScrollView>
    )
  }
}

export { TasksScreen, }
