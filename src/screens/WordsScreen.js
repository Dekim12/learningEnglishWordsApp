import React, { Component, } from 'react'
import { StyleSheet, View, } from 'react-native'
import { WordList, } from '../components'

class WordsScreen extends Component {
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

  static navigationOptions = {
    title: 'Words',
  }

  render() {
    return (
      <View style={styles.container}>
        <WordList data={this.data} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
})

export { WordsScreen, }
