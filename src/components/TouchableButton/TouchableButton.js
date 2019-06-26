// @flow

import * as React from 'react'
import { TouchableOpacity, } from 'react-native'

type Props = {
  onPress: () => void,
  style: mixed,
  children: Array<React.Node>
}

const TouchableButton = ({ onPress, style, children, }: Props) => (
  <TouchableOpacity onPress={onPress} style={style} activeOpacity={0.7}>
    {children}
  </TouchableOpacity>
)

export { TouchableButton, }
