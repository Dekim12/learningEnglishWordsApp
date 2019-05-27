import React, { Component, } from 'react'
import { View, Text, } from 'react-native'
// import styles from './style'

class TagDetailsScreen extends Component {
  static navigationOptions = ({ navigation, }) => ({
    title: `Tag ${navigation.getParam('tagName')}`,
    headerTitleContainerStyle: {
      marginRight: 50,
    },
  })

  render() {
    return (
      <View>
        <Text>Tag Details Screen</Text>
      </View>
    )
  }
}

export { TagDetailsScreen, }
