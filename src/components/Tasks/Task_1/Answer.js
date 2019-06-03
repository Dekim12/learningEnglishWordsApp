import React, { Component, } from 'react'
import { Text, } from 'react-native'
import { TouchableButton, } from '../../index'

class SelectableAnswer extends Component {
  state = {
    btnColor: {},
    textColor: {},
    correct: true,
  }

  toBlink = () => new Promise(() => {
    setTimeout(() => {
      this.setState({
        btnColor: {},
        textColor: {},
      })
    }, 850)
  })

  nextWord = () => {
    const { toNextWord, } = this.props
    const { correct, } = this.state

    return new Promise(() => {
      setTimeout(() => toNextWord(correct), 700)
    })
  }

  check = async () => {
    const { isRightAnswer, } = this.props

    if (isRightAnswer) {
      this.setState({
        btnColor: { backgroundColor: '#339933', },
        textColor: { color: '#ffffff', },
      })

      await this.nextWord()
    } else {
      this.setState({
        btnColor: { backgroundColor: 'rgba(179, 0, 0, 0.6)', },
        textColor: { color: '#ffffff', },
        correct: false,
      })

      await this.toBlink()
    }
  }

  render() {
    const { style, currentAnswer, textStyle, } = this.props
    const { btnColor, textColor, } = this.state

    return (
      <TouchableButton style={[style, btnColor]} onPress={this.check}>
        <Text style={[textStyle, textColor]}>{currentAnswer}</Text>
      </TouchableButton>
    )
  }
}

export { SelectableAnswer, }
