import React from 'react'
import { TouchableOpacity, } from 'react-native'

const TouchableButton = ({ onPress, style, content, }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    {content}
  </TouchableOpacity>
)

export { TouchableButton, }
