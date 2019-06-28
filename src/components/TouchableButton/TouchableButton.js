// @flow

import React from 'react'
import type { Node, } from 'react'
import { TouchableOpacity, } from 'react-native'
import type { ViewStyleProp, } from 'react-native'

type Props = {
  onPress: () => void,
  style: ViewStyleProp,
  children: Array<Node>
}

const TouchableButton = ({ onPress, style, children, }: Props) => (
  <TouchableOpacity onPress={onPress} style={style} activeOpacity={0.7}>
    {children}
  </TouchableOpacity>
)

export { TouchableButton, }
