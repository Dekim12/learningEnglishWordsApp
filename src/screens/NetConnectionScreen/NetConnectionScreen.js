// @flow

import React from 'react'
import { View, Text, } from 'react-native'
import { Navigation, } from 'react-native-navigation'
import { TouchableButton, } from '../../components'
import styles from './style'

type Props = {
  componentId: string
}

const NetConnectionScreen = ({ componentId, }: Props) => (
  <View style={styles.container} testID='netConnection'>
    <Text style={styles.messageText}> Wooow...</Text>
    <Text style={styles.messageText}>
      Your internet connection has been lost.
    </Text>
    <Text style={styles.solutionText}>
      Please check the internet connection and reload the app.
    </Text>
    <TouchableButton
      style={styles.reloadBtn}
      onPress={() => Navigation.dismissOverlay(componentId)}
    >
      <Text style={styles.btnText}>RELOAD</Text>
    </TouchableButton>
  </View>
)

export { NetConnectionScreen, }
