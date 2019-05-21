import React, { Component, } from 'react'
import { StyleSheet, View, } from 'react-native'
import { WordList, TouchableButton, Icon, } from '../components'

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
    this.props.navigation.navigate('WordDetails', { id, word, })
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  addButton: {
    width: 55,
    height: 55,
    position: 'absolute',
    bottom: 10,
    right: 43,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8A00',
  },
})

export { WordsScreen, }
