import React, { Component, } from 'react'
import { View, Text, } from 'react-native'
import styles from './style'

class FindUsingImage extends Component {
  state = {}

  render() {
    const { container, } = styles

    return (
      <View style={container}>
        <Text>Find Word Using Image Task </Text>
      </View>
    )
  }
}

export { FindUsingImage, }
