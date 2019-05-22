import React, { Component, } from 'react'
import { Text, View, Button, } from 'react-native'
import styles from './style'

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

export { TasksScreen, }
