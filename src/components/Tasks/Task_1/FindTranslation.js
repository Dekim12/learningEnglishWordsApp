import React, { Component, } from 'react'
import { Text, View, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TouchableButton, } from '../../index'
import { getRandomAnswers, } from '../../../utils'
import styles from './style'

class FindTranslation extends Component {
  state = {
    currentWord: 0,
  }

  generateAnswers = (currentWord, wordsList) => {
    const { answerText, answerBtn, } = styles
    const answersArray = getRandomAnswers(currentWord, wordsList)

    return answersArray.map(answer => (
      <TouchableButton style={answerBtn} key={uuidv4()}>
        <Text style={answerText}>{answer}</Text>
      </TouchableButton>
    ))
  }

  render() {
    const { allWords, wordsForTask, answersBlock, } = this.props
    const { currentWord, } = this.state
    const {
      container,
      progressBarStyle,
      wordStyle,
      transcriptionStyle,
    } = styles

    return (
      <View style={container}>
        <View style={progressBarStyle} />
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
