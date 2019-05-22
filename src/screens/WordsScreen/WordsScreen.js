import React, { Component, } from 'react'
import { View, } from 'react-native'
import { WordList, TouchableButton, Icon, } from '../../components'
import styles from './style'

class WordsScreen extends Component {
  static navigationOptions = {
    title: 'All Words',
  }

  data = [
    {
      id: 1,
      word: 'home',
      transcription: 'jasldfjl',
      translation: 'дом',
    },
    {
      id: 2,
      word: 'dog',
      transcription: 'jasd',
      translation: 'собака',
    },
    {
      id: 3,
      word: 'fish',
      transcription: 'jaslsdfdfjl',
      translation: 'рыба',
    },
    {
      id: 4,
      word: 'ruby',
      transcription: 'ruby',
      translation: 'рубин',
    },
    {
      id: 5,
      word: 'city',
      transcription: 'jcity',
      translation: 'город',
    }
  ]

  openDescription = (id, word) => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate('WordDetails', { id, word, })
  }

  render() {
    const { container, addButton, } = styles

    return (
      <View style={container}>
        <WordList data={this.data} openDescription={this.openDescription} />
        <TouchableButton
          content={<Icon name='plus' size={33} color='#ffffff' />}
          style={addButton}
        />
      </View>
    )
  }
}

export { WordsScreen, }
