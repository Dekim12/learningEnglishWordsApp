// @flow

import React, { Component, } from 'react'
import { Text, } from 'react-native'
import { TouchableButton, } from '../../index'
import { ANSWER_DELAY, } from '../../../constants'
import styles from './style'

type Props = {
  checkResult: (result: boolean) => void,
  isRightAnswer: boolean,
  currentAnswer: string
}

type State = {
  btnColor: { backgroundColor?: string },
  textColor: { color?: string }
}

class SelectableAnswer extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      btnColor: {},
      textColor: {},
    }
  }

  nextWord = (isRight: boolean): Promise<void> => {
    const { checkResult, } = this.props

    return new Promise(() => {
      setTimeout(() => checkResult(isRight), ANSWER_DELAY)
    })
  }

  check = async (): Promise<void> => {
    const { isRightAnswer, } = this.props

    this.setState({
      btnColor: isRightAnswer
        ? { backgroundColor: '#339933', }
        : { backgroundColor: 'rgba(179, 0, 0, 0.6)', },
      textColor: { color: '#ffffff', },
    })

    await this.nextWord(isRightAnswer)
  }

  render() {
    const { currentAnswer, } = this.props
    const { btnColor, textColor, } = this.state

    return (
      <TouchableButton
        style={[styles.answerBtn, btnColor]}
        onPress={this.check}
      >
        <Text style={[styles.answerText, textColor]}>{currentAnswer}</Text>
      </TouchableButton>
    )
  }
}

export { SelectableAnswer, }
