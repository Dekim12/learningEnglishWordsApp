import React, { Component, } from 'react'
import { Text, View, } from 'react-native'
import styles from './style'

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Tasks Settings',
    headerTitleContainerStyle: {
      marginRight: 40,
    },
  }

  render() {
    const { container, } = styles

    return (
      <View style={container}>
        <Text>Settings Screen</Text>
      </View>
    )
  }
}

export { SettingsScreen, }
