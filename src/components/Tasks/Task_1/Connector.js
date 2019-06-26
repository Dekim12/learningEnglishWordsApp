// @flow

import * as React from 'react'
import { Text, View, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { createLine, } from '../../../utils'
import { SelectableAnswer, } from './Answer'
import { ProgressBar, } from './ProgressBar'
import type { WordObj, } from '../../../flowAliases'
import styles from './style'

type Props = {
  defaultResult: boolean,
  toNextWord: (isCorrectResult: boolean) => void,
  possibleAnswers: Array<string>,
  currentWord: WordObj,
  countWordsForTask: number,
  answersResult: Array<boolean>
}

type State = {
  currentResult: boolean
}

class Connector extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const { defaultResult, } = this.props

    this.state = { currentResult: defaultResult, }
  }

  checkResult = (result: boolean): void => {
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

  generateAnswersButtons = (
    answers: Array<string>,
    currentWord: Array<string>
  ): Array<React.Node> => answers.map((answer: string) => (
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
