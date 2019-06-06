import React, { Component, } from 'react'
import { Text, View, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { createLine, } from '../../../utils'
import { SelectableAnswer, } from './Answer'
import { ProgressBar, } from './ProgressBar'
import styles from './style'

class Connector extends Component {
  constructor(props) {
    super(props)
    const { defaultResult, } = this.props

    this.state = { currentResult: defaultResult, }
  }

  checkResult = (result) => {
    const { toNextWord, } = this.props
    const { currentResult, } = this.state

    if (result && currentResult) {
      toNextWord(true)
    } else if (result && !currentResult) {
      toNextWord(false)
      this.setState({ currentResult: true, })
    } else if (!result) {
      this.setState({ currentResult: false, })
    }
  }

  generateAnswersButtons = (answers, currentWord) => answers.map(answer => (
    <SelectableAnswer
      checkResult={this.checkResult}
      isRightAnswer={createLine(currentWord) === answer}
      currentAnswer={answer}
      key={uuidv4()}
    />
  ))

  render() {
    const {
      possibleAnswers,
      currentWord,
      countWordsForTask,
      answersResult,
    } = this.props

    return (
      <View style={styles.container}>
        <ProgressBar
          answersResults={answersResult}
          countWords={countWordsForTask}
        />
        <View style={styles.taskCondition}>
          <Text style={styles.wordStyle}>{currentWord.word}</Text>
          <Text style={styles.transcriptionStyle}>
            {`[${currentWord.transcription}]`}
          </Text>
        </View>
        <View>
          {this.generateAnswersButtons(
            possibleAnswers,
            currentWord.translation
          )}
        </View>
      </View>
    )
  }
}

export { Connector, }
