import React, { Component, } from 'react'
import { View, } from 'react-native'
import { WordListContainer, } from '../../redux/containers'
import { TouchableButton, Icon, } from '../../components'
import styles from './style'

class WordsScreen extends Component {
  static navigationOptions = {
    title: 'All Words',
  }

  toDescription = (id, word) => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate('WordDetails', { id, word, })
  }

  toNewWord = () => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate('NewWord')
  }

  render() {
    const { container, addButton, } = styles

    return (
      <View style={container}>
        <WordListContainer openDescription={this.toDescription} />
        <TouchableButton style={addButton} onPress={this.toNewWord}>
          <Icon name='plus' size={33} color='#ffffff' />
        </TouchableButton>
      </View>
    )
  }
}

export { WordsScreen, }
