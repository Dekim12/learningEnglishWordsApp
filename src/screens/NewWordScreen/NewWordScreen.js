import React from 'react'
import { View, Text, } from 'react-native'
import styles from './style'

const NewWordScreen = props => (
  <View style={styles.container} testID='newWord'>
    <Text>NewWordScreen</Text>
  </View>
)

export { NewWordScreen, }
