// @flow

import React, { Component, } from 'react'
import { View, } from 'react-native'
import { getRandomAnswers, } from '../../../utils'
import { Connector, } from './Connector'
import { ResultPopup, } from './ResultPopup'
import type { WordObjType, } from '../../../flowAliases'
import styles from './style'

type Props = {
  allWords: Array<WordObjType>,
  wordsForTask: Array<WordObjType>,
  goToTasks: (allAnswers: number, rightAnswers: number) => void
}

type State = {
  currentWord: number,
  answersResult: Array<boolean>,
  hasTaskDone: boolean
}

class FindTranslation extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      currentWord: 0,
      answersResult: [],
      hasTaskDone: false,
    }
  }

  toNextWord = (isCorrectResult: boolean): void => {
    const { wordsForTask, } = this.props
    const { currentWord, } = this.state

    if (currentWord < wordsForTask.length - 1) {
      this.setState(prevState => ({
        currentWord: prevState.currentWord + 1,
        answersResult: prevState.answersResult.concat(isCorrectResult),
      }))
    } else {
      this.setState(prevState => ({
        hasTaskDone: true,
        answersResult: prevState.answersResult.concat(isCorrectResult),
      }))
    }
  }

  render() {
    const { allWords, wordsForTask, goToTasks, } = this.props
    const { currentWord, answersResult, hasTaskDone, } = this.state

    const possibleAnswers: Array<string> = getRandomAnswers(
      wordsForTask[currentWord].translation,
      allWords
    )

    return (
      <View style={styles.rootBlock}>
        <Connector
          defaultResult
          countWordsForTask={wordsForTask.length}
          currentWord={wordsForTask[currentWord]}
          possibleAnswers={possibleAnswers}
          toNextWord={this.toNextWord}
          answersResult={answersResult}
        />
        {hasTaskDone && (
          <ResultPopup result={answersResult} goToTasks={goToTasks} />
        )}
      </View>
    )
  }
}

export { FindTranslation, }
