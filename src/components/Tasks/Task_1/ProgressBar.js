import React from 'react'
import { View, StyleSheet, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { screenSize, } from '../../../utils'

const ProgressBar = ({ answersResults, answerList, }) => {
  const { progressBarStyle, rightPartStyle, wrongPartStyle, } = styles

  const partWidth = screenSize.width / answerList.length

  const generateProgressParts = partsList => partsList.map(isCorrect => (
    <View
      style={[
        { width: partWidth, },
        isCorrect ? rightPartStyle : wrongPartStyle
      ]}
      key={uuidv4()}
    />
  ))

  return (
    <View style={progressBarStyle}>
      {generateProgressParts(answersResults)}
    </View>
  )
}

const styles = StyleSheet.create({
  progressBarStyle: {
    width: screenSize.width,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    height: 10,
    backgroundColor: '#E8E8E8',
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: '#808080',
  },
  rightPartStyle: {
    height: 7,
    backgroundColor: '#006600',
  },
  wrongPartStyle: {
    height: 7,
    backgroundColor: '#e63900',
  },
})

export { ProgressBar, }
