import React, { Component, } from 'react'
import { StyleSheet, Text, View, Button, } from 'react-native'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
})

export { TagsScreen, }
