import React from 'react'
import { View, Text, } from 'react-native'
import { TouchableButton, } from '../index'
import { PERMISSION_QUESTIONS, } from '../../constants'
import styles from './style'

const PermissionPopup = ({ isWord, resolve, refresh, }) => {
  const confirm = () => {
    resolve()
    refresh()
  }

  return (
    <View style={styles.container}>
      <View style={styles.popupBlock}>
        <Text style={styles.headline} testID='permission-alert'>
          {isWord ? PERMISSION_QUESTIONS.word : PERMISSION_QUESTIONS.tag}
        </Text>
        <View style={styles.bottomsBlock}>
          <TouchableButton style={styles.btn} onPress={confirm}>
            <Text style={styles.btnText}>YES</Text>
          </TouchableButton>
          <TouchableButton
            style={[styles.btn, styles.rejectBtn]}
            onPress={refresh}
          >
            <Text style={styles.btnText}>NO</Text>
          </TouchableButton>
        </View>
      </View>
    </View>
  )
}

export { PermissionPopup, }
