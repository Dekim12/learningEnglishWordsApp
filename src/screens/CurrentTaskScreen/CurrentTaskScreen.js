import React, { Component, } from 'react'
import { Text, View, } from 'react-native'
import styles from './style'

class CurrentTaskScreen extends Component {
  static navigationOptions = {
    title: 'Task Performance',
    headerTitleContainerStyle: {
      marginRight: 25,
    },
  }

  render() {
    const { navigation, } = this.props
    const { container, } = styles

    const taskName = navigation.getParam('taskName')

    return (
      <View style={container}>
        <Text>{taskName}</Text>
      </View>
    )
  }
}

export { CurrentTaskScreen, }
