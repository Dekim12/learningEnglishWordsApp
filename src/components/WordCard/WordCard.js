import React, { useCallback, } from 'react'
import { View, Text, } from 'react-native'
import { Icon, TouchableButton, } from '../index'
import { createLine, } from '../../utils'
import styles from './style'

const WordCard = ({
  description: { id, transcription, word, translation, },
  isFirstCard,
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

  const openDetails = useCallback(() => {
    goToDetails(id, word)
  }, [id, word])

  return (
    <TouchableButton
      onPress={openDetails}
      style={[cardContainer, isFirstCard && { borderTopWidth: 1.5, }]}
    >
      <View style={wrapper}>
        <View style={[wordsContainer]}>
          <Text style={wordText}>{word}</Text>
          <Text style={transcriptionText}>{`[${transcription}]`}</Text>
        </View>
        <Text style={translationText}>{createLine(translation)}</Text>
      </View>
      <TouchableButton onPress={deleteWord} style={iconBtn}>
        <Icon name='trash-alt' size={29} color='#FF402E' />
      </TouchableButton>
    </TouchableButton>
  )
}

export { WordCard, }
