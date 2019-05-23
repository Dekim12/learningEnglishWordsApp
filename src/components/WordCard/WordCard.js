import React from 'react'
import { View, Text, TouchableOpacity, } from 'react-native'
import { Icon, } from '../index'
import styles from './style'

const WordCard = ({
  description: { id, transcription, word, translation, },
  isLastCard,
  goToDetails,
  deleteWord,
}) => {
  const {
    cardContainer,
    wordsContainer,
    wordText,
    transcriptionText,
    translationText,
    iconBtn,
    wrapper,
  } = styles

  const onPress = () => {
    goToDetails(id, word)
  }

  const deleteCurrentWord = () => deleteWord(id)

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        cardContainer,
        isLastCard && { borderBottomWidth: 1, marginBottom: 100, }
      ]}
    >
      <View style={wrapper}>
        <View style={[wordsContainer]}>
          <Text style={wordText}>{word}</Text>
          <Text style={transcriptionText}>{`[${transcription}]`}</Text>
        </View>
        <Text style={translationText}>{translation}</Text>
      </View>
      <TouchableOpacity onPress={deleteCurrentWord} style={iconBtn}>
        <Icon name='trash-alt' size={29} color='#FF402E' />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export { WordCard, }
