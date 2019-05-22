import React, { Component, } from 'react'
import { Text, View, } from 'react-native'
import styles from './style'

class WordDescriptionScreen extends Component {
  static navigationOptions = ({ navigation, }) => {
    const word = navigation.getParam('word').split('')
    word[0] = word[0].toUpperCase()

    return {
      title: word.join(''),
      headerTitleContainerStyle: {
        marginRight: 55,
      },
    }
  }

  render() {
    const { navigation, } = this.props
    const wordId = navigation.getParam('id')

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>wordDescriptionScreen</Text>
        <Text>Id {wordId}</Text>
      </View>
    )
  }
}

export { WordDescriptionScreen, }
