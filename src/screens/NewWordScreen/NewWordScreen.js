import React from 'react'
import { View, Text, Button, } from 'react-native'
import { Navigation, } from 'react-native-navigation'
import { NET_CONNECTION_SCREEN, } from '../../constants'
import styles from './style'

const toStatisticOverlay = () => Navigation.showOverlay({
  component: {
    name: NET_CONNECTION_SCREEN,
  },
})

const NewWordScreen = () => (
  <View style={styles.container} testID='newWord'>
    <Text>NewWordScreen</Text>
    <Button
      onPress={toStatisticOverlay}
      title='Learn More'
      color='#841584'
      accessibilityLabel='Learn more about this purple button'
    />
  </View>
)

export { NewWordScreen, }
