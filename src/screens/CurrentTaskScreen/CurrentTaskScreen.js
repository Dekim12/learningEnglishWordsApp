// @flow

import React from 'react'
import { ScrollView, } from 'react-native'
import { TASK_LIST, } from '../../constants'
import type { WordObjType, } from '../../flowAliases'
import styles from './style'

type Props = {
  wordsForTask: Array<WordObjType>,
  taskName: string,
  wordsList: Array<WordObjType>,
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
