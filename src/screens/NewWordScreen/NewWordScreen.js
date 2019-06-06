import React, { Component, } from 'react'
import { View, Text, } from 'react-native'
import {} from '../../components'
import styles from './style'

class NewWordScreen extends Component {
  static navigationOptions = {
    title: 'New Word',
    headerTitleContainerStyle: {
      marginRight: 50,
    },
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
