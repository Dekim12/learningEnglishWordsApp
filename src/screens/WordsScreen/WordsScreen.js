import React, { Component, } from 'react'
import { View, StatusBar, Text, } from 'react-native'
import styles from './style'

class WordsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Text>Words Screen</Text>
      </View>
    )
  }
}

export { WordsScreen, }
