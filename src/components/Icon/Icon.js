// @flow

import React from 'react'
import type { ViewStyleProp, } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import type { FontAwesome5Glyphs, } from 'react-native-vector-icons/FontAwesome5'

type Props = {
  name: FontAwesome5Glyphs,
  size: number,
  color: string,
  style: ViewStyleProp
}

const Icon = ({ name, size = 40, color = '#ffffff', style, }: Props) => {
  const IconComponent = Icons

  return <IconComponent name={name} size={size} color={color} style={style} />
}

export { Icon, }
