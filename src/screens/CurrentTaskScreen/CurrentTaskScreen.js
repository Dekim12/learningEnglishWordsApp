// @flow

import React from 'react'
import { ScrollView, } from 'react-native'
import { TASK_LIST, } from '../../constants'
import type { WordObj, } from '../../flowAliases'
import styles from './style'

type Props = {
  wordsForTask: Array<WordObj>,
  taskName: string,
  wordsList: Array<WordObj>,
  goToTasks: (allAnswers: number, rightAnswers: number) => void
}

const CurrentTaskScreen = ({
  wordsForTask,
  taskName,
  wordsList,
  goToTasks,
}: Props) => {
  const Task: string = TASK_LIST[taskName]

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
