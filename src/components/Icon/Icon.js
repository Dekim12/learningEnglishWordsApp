import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome5'

const Icon = ({ name, size = 40, color = '#ffffff', style, }) => {
  const IconComponent = Icons

  return <IconComponent name={name} size={size} color={color} style={style} />
}

export { Icon, }
