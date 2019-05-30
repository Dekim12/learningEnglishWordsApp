import React from 'react'
import { View, Text, } from 'react-native'
import { TouchableButton, } from '../index'
import styles from './style'

const PermissionPopup = ({ isWord, resolve, refresh, }) => {
  const { container, popupBlock, headline, bottomsBlock, btn, btnText, } = styles

  const confirm = () => {
    resolve()
    refresh()
  }

  return (
    <View style={container}>
      <View style={popupBlock}>
        <Text style={headline}>
          {isWord
            ? 'Are you sure you want to remove this word?'
            : 'Are you sure you want to remove this tag with all its words?'}
        </Text>
        <View style={bottomsBlock}>
          <TouchableButton style={btn} onPress={confirm}>
            <Text style={btnText}>YES</Text>
          </TouchableButton>
          <TouchableButton
            style={[
              btn,
              { backgroundColor: '#D97604', borderColor: '#ffcc80', }
            ]}
            onPress={refresh}
          >
            <Text style={btnText}>NO</Text>
          </TouchableButton>
        </View>
      </View>
    </View>
  )
}

export { PermissionPopup, }
