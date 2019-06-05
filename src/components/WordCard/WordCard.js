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
  const openDetails = useCallback(() => {
    goToDetails(id, word)
  }, [id, word])

  return (
    <TouchableButton
      onPress={openDetails}
      style={[styles.cardContainer, isFirstCard && styles.firstElemStyle]}
    >
      <View style={styles.wrapper}>
        <View style={styles.wordsContainer}>
          <Text style={styles.wordText}>{word}</Text>
          <Text style={styles.transcriptionText}>{`[${transcription}]`}</Text>
        </View>
        <Text style={styles.translationText}>{createLine(translation)}</Text>
      </View>
      <TouchableButton onPress={deleteWord} style={styles.iconBtn}>
        <Icon name='trash-alt' size={29} color='#FF402E' />
      </TouchableButton>
    </TouchableButton>
  )
}

export { WordCard, }
