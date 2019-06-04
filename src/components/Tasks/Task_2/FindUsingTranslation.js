import React, { Component, } from 'react'
import { View, Text, } from 'react-native'
import styles from './style'

class FindUsingTranslation extends Component {
  state = {}

  render() {
    const { container, } = styles

    return (
      <View style={container}>
        <Text>Find Word Using Translation Task </Text>
      </View>
    )
  }
}

export { FindUsingTranslation, }
