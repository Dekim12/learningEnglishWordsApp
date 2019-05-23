import React, { Component, } from 'react'
import { View, Text, } from 'react-native'
import { TouchableButton, Icon, } from '../../components'
import styles from './style'

class NewWordScreen extends Component {
  static navigationOptions = {
    title: 'New Word',
    headerTitleContainerStyle: {
      marginRight: 50,
    },
  }

  render() {
    const { container, } = styles

    return (
      <View style={container}>
        <Text>NewWordScreen</Text>
      </View>
    )
  }
}

export { NewWordScreen, }
