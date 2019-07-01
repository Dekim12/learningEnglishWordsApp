// @flow

import React from 'react'
import { View, Text, } from 'react-native'
import styles from './style'

const NetConnectionScreen = () => (
  <View style={styles.container} testID='netConnection'>
    <Text style={styles.messageText}> Wooow...</Text>
    <Text style={styles.messageText}>
      Your internet connection has been lost.
    </Text>
    <Text style={styles.solutionText}>
      Please check the internet connection.
    </Text>
  </View>
)

export { NetConnectionScreen, }
