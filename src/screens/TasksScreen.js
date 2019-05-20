import React, { Component, } from 'react'
import { StyleSheet, Text, View, Button, } from 'react-native'

class TasksScreen extends Component {
  static navigationOptions = {
    title: 'Tasks',
  }

  render() {
    const { navigate, } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>TasksScreen</Text>
        <Button
          title='Go to Tags'
          onPress={() => navigate('Tags', { otherParam: 'other Param', })}
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

export { TasksScreen, }
