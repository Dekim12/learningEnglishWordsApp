import React, { Component, } from 'react'
import { Text, View, Button, } from 'react-native'
import styles from './style'

class TagsScreen extends Component {
  static navigationOptions = {
    title: 'Tags',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>TagsScreen</Text>

        <Button
          title='Go to Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

export { TagsScreen, }
