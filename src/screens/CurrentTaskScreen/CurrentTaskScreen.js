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

  render() {
    const { wordsForTask, taskName, wordsList, goToTasks, } = this.props
    const Task = TASK_LIST[taskName]

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Task
          name={taskName}
          allWords={wordsList}
          wordsForTask={wordsForTask}
          goToTasks={goToTasks}
        />
      </ScrollView>
    )
  }
}

export { CurrentTaskScreen, }
