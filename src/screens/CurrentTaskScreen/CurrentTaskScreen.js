import React, { Component, } from 'react'
import { ScrollView, } from 'react-native'
import { TASK_LIST, } from '../../constants'
import styles from './style'

class CurrentTaskScreen extends Component {
  static navigationOptions = {
    title: 'Task Performance',
    headerTitleContainerStyle: {
      marginRight: 25,
    },
  }

  toAllTask = () => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate('Tasks')
  }

  render() {
    const { wordsForTask, taskName, wordsList, goToTasks, } = this.props
    const { container, } = styles

    const Task = TASK_LIST[taskName]

    return (
      <ScrollView
        style={container}
        contentContainerStyle={{ alignItems: 'center', }}
      >
        <Task
          name={taskName}
          allWords={wordsList}
          wordsForTask={wordsForTask}
          toTasksScreen={this.toAllTask}
          goToTasks={goToTasks}
        />
      </ScrollView>
    )
  }
}

export { CurrentTaskScreen, }
