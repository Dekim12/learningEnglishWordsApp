import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native'
import { Icon, } from './index'

const WordCard = ({
  description: { id, transcription, word, translation, },
  isLastCard,
}) => {
  const {
    cardContainer,
    wordsContainer,
    wordText,
    transcriptionText,
    translationText,
    iconBtn,
  } = styles

  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={[cardContainer, isLastCard && { borderBottomWidth: 1, }]}>
        <View style={wordsContainer}>
          <Text style={wordText}>{word}</Text>
          <Text style={transcriptionText}>{`[${transcription}]`}</Text>
        </View>
        <Text style={translationText}>{translation}</Text>
        <TouchableOpacity onPress={() => {}} style={iconBtn}>
          <Icon name='trash-alt' size={29} color='#FF402E' />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 58,
    borderTopWidth: 1.5,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 45,
    borderColor: '#4d446f',
  },
  wordsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wordText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 15,
  },
  transcriptionText: {
    fontSize: 17,
    fontWeight: '400',
    marginTop: 3,
    color: '#989898',
  },
  translationText: {
    fontSize: 18,
    marginTop: -3,
    color: '#FF8A00',
  },
  iconBtn: {
    position: 'absolute',
    right: 11,
    bottom: 13,
  },
})

export { WordCard, }
