import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native'
import { Icon, } from './index'
import { screenSize, } from '../utils'

const WordCard = ({
  description: { id, transcription, word, translation, },
  isLastCard,
  goToDetails,
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
      <TouchableOpacity onPress={() => {}} style={iconBtn}>
        <Icon name='trash-alt' size={29} color='#FF402E' />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    borderTopWidth: 1.5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#4d446f',
  },
  wrapper: {
    width: screenSize.width - 60,
  },
  wordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  wordText: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'black',
    marginRight: 15,
    fontFamily: 'Chunkfive',
  },
  transcriptionText: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 3,
    color: '#989898',
    fontFamily: 'PlayfairDisplay',
  },
  translationText: {
    fontSize: 18,
    marginTop: -2,
    color: '#FF8A00',
    fontFamily: 'OpenSans',
  },
  iconBtn: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
})

export { WordCard, }
