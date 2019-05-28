import React from 'react'
import { Text, TouchableOpacity, } from 'react-native'
import { Icon, } from '../index'
import styles from './style'

const TagCard = ({ name, toEdit, isFirstCard, toDetails, }) => {
  const { container, tagName, } = styles

  const openDetails = () => {
    toDetails(name)
  }

  const editTag = () => {
    toEdit(name)
  }

  return (
    <TouchableOpacity
      onPress={openDetails}
      style={[container, isFirstCard && { borderTopWidth: 1.5, }]}
    >
      <Text style={tagName}>
        <Text style={{ color: '#B0B0B0', }}>#</Text>
        {name}
      </Text>
      <TouchableOpacity onPress={editTag} style={{ marginLeft: 5, }}>
        <Icon name='pen-square' size={40} color='#2d862d' />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export { TagCard, }
