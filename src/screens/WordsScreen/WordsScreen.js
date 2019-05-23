import React, { Component, } from 'react'
import { View, } from 'react-native'
import { WordListContainer, } from '../../redux/containers'
import { TouchableButton, Icon, } from '../../components'
import styles from './style'

class WordsScreen extends Component {
  static navigationOptions = {
    title: 'All Words',
  }

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
        <WordListContainer openDescription={this.openDescription} />
        <TouchableButton style={addButton}>
          <Icon name='plus' size={33} color='#ffffff' />
        </TouchableButton>
      </View>
    )
  }
}

export { WordsScreen, }
