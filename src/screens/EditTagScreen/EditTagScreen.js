import React, { Component, } from 'react'
import { View, Text, } from 'react-native'
// import styles from './style'

class EditTagScreen extends Component {
  static navigationOptions = {
    title: 'Edit Tag',
    headerTitleContainerStyle: {
      marginRight: 50,
    },
  }

  render() {
    return (
      <View>
        <Text>Edit Tag Screen</Text>
      </View>
    )
  }
}

export { EditTagScreen, }
