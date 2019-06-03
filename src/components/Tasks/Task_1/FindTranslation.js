import React, { Component, } from 'react'
import { Text, View, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { getRandomAnswers, createLine, } from '../../../utils'
import { SelectableAnswer, } from './Answer'
import { ProgressBar, } from './ProgressBar'
import styles from './style'

class FindTranslation extends Component {
  state = {
    currentWord: 0,
    answersResult: [],
  }

  toNextWord = (isCorrectResult) => {
    const { currentWord, } = this.state
    const { wordsForTask, toTasksScreen, } = this.props

    if (currentWord === wordsForTask.length - 1) {
      this.setState(prevState => ({
        answersResult: prevState.answersResult.concat(isCorrectResult),
      }))
      toTasksScreen()
    } else {
      this.setState(prevState => ({
        currentWord: prevState.currentWord + 1,
        answersResult: prevState.answersResult.concat(isCorrectResult),
      }))
    }
  }

  generateAnswers = (currentWord, wordsList) => {
    const { answerText, answerBtn, } = styles
    const answersArray = getRandomAnswers(currentWord, wordsList)

    return answersArray.map(answer => (
      <SelectableAnswer
        toNextWord={this.toNextWord}
        isRightAnswer={createLine(currentWord) === answer}
        currentAnswer={answer}
        style={answerBtn}
        textStyle={answerText}
        key={uuidv4()}
      />
    ))
  }

  render() {
    const { allWords, wordsForTask, answersBlock, } = this.props
    const { currentWord, answersResult, } = this.state
    const { container, wordStyle, transcriptionStyle, } = styles

    return (
      <View style={container}>
        <ProgressBar answersResults={answersResult} answerList={wordsForTask} />
        <View style={{ alignItems: 'center', }}>
          <Text style={wordStyle}>{wordsForTask[currentWord].word}</Text>
          <Text style={transcriptionStyle}>
            {`[${wordsForTask[currentWord].transcription}]`}
          </Text>
        </View>
        <View style={answersBlock}>
          {this.generateAnswers(
            wordsForTask[currentWord].translation,
            allWords
          )}
        </View>
      </View>
    )
  }
}

export { FindTranslation, }
