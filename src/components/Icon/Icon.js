// @flow

import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome5'

type Props = { name: any, size: number, color: string, style: mixed }

const Icon = ({ name, size = 40, color = '#ffffff', style, }: Props) => {
  const IconComponent = Icons

  return <IconComponent name={name} size={size} color={color} style={style} />
}

export { Icon, }
