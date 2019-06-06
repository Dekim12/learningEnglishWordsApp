import React, { Component, } from 'react'
import { Text, } from 'react-native'
import { TouchableButton, } from '../../index'
import { ANSWER_DELAY, } from '../../../constants'
import styles from './style'

class SelectableAnswer extends Component {
  state = {
    btnColor: {},
    textColor: {},
  }

  nextWord = (isRight) => {
    const { checkResult, } = this.props

    return new Promise(() => {
      setTimeout(() => checkResult(isRight), ANSWER_DELAY)
    })
  }

  check = async () => {
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
