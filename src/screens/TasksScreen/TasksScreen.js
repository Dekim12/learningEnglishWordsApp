import React, { Component, } from 'react'
import { Text, ScrollView, } from 'react-native'
import styles from './style'

class TasksScreen extends Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text>Tasks Screen</Text>
      </ScrollView>
    )
  }
}

export { TasksScreen, }
