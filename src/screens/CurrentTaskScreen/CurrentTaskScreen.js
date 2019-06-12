import React from 'react'
import { ScrollView, } from 'react-native'
import { TASK_LIST, } from '../../constants'
import styles from './style'

const CurrentTaskScreen = ({
  wordsForTask,
  taskName,
  wordsList,
  goToTasks,
}) => {
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

export { CurrentTaskScreen, }
