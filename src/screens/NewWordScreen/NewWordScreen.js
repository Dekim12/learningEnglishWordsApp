import React, { Component, } from 'react'
import { View, Text, } from 'react-native'
import styles from './style'

class NewWordScreen extends Component {
  static options() {
    return {
      topBar: {
        subtitle: {
          text: 'New Word',
        },
      },
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>NewWordScreen</Text>
      </View>
    )
  }
}

export { NewWordScreen, }
