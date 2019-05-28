import React, { Component, } from 'react'
import { Text, FlatList, ScrollView, } from 'react-native'
import { Icon, TouchableButton, } from '../../components'
import { createLine, } from '../../utils'
import styles from './style'

class TagDetailsScreen extends Component {
  static navigationOptions = ({ navigation, }) => ({
    title: `Tag ${navigation.getParam('tagName')}`,
    headerTitleContainerStyle: {
      marginRight: 50,
    },
  })

  renderWords = ({ item, }) => {
    const { deleteWord, navigation, } = this.props
    const {
      wordItem,
      wordStyle,
      transcriptionStyle,
      translationStyle,
      deleteBtn,
    } = styles

    const deleteCurrentWord = () => deleteWord(item.id)
    const toWordScreen = () => navigation.navigate('WordDetails', {
      id: item.id,
      word: item.word,
    })

    return (
      <TouchableButton style={wordItem} onPress={toWordScreen}>
        <Text style={wordStyle}>{item.word}</Text>
        <Text style={transcriptionStyle}>{item.transcription}</Text>
        <Text style={translationStyle}>{createLine(item.translation)}</Text>
        <TouchableButton style={deleteBtn} onPress={deleteCurrentWord}>
          <Icon name='trash-alt' size={29} color='#2d862d' />
        </TouchableButton>
      </TouchableButton>
    )
  }

  toCreateWordScreen = () => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate('NewWord')
  }

  keyExtractor = ({ id, }) => id.toString()

  render() {
    const { tagsWordsList, tagName, } = this.props
    const { container, headline, addBtn, addText, } = styles

    return (
      <ScrollView
        style={container}
        contentContainerStyle={{ alignItems: 'center', }}
      >
        <Text style={headline}>{tagName}</Text>
        <FlatList
          data={tagsWordsList}
          renderItem={this.renderWords}
          keyExtractor={this.keyExtractor}
        />
        <TouchableButton style={addBtn} onPress={this.toCreateWordScreen}>
          <Text style={addText}>ADD NEW WORD</Text>
        </TouchableButton>
      </ScrollView>
    )
  }
}

export { TagDetailsScreen, }
