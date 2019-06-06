import React, { Component, } from 'react'
import { ScrollView, } from 'react-native'
import { getRandomAnswers, } from '../../../utils'
import { Connector, } from './Connector'
import { ResultPopup, } from './ResultPopup'
import styles from './style'

class FindTranslation extends Component {
  state = {
    currentWord: 0,
    answersResult: [],
    hasTaskDone: false,
  }

  toNextWord = (isCorrectResult) => {
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

    const possibleAnswers = getRandomAnswers(
      wordsForTask[currentWord].translation,
      allWords
    )

    return (
      <ScrollView style={styles.rootBlock}>
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
      </ScrollView>
    )
  }
}

export { FindTranslation, }
