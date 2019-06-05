import React from 'react'
import { Text, } from 'react-native'
import { Icon, TouchableButton, } from '../index'
import styles from './style'

const TagCard = ({ name, toEdit, isFirstCard, toDetails, }) => {
  const { container, tagName, firstElem, hashtag, editBtn, } = styles

  const openDetails = () => {
    toDetails(name)
  }

  const editTag = () => {
    toEdit(name)
  }

  return (
    <TouchableButton
      onPress={openDetails}
      style={[container, isFirstCard && firstElem]}
    >
      <Text style={tagName}>
        <Text style={hashtag}>#</Text>
        {name}
      </Text>
      <TouchableButton onPress={editTag} style={editBtn}>
        <Icon name='pen-square' size={40} color='#2d862d' />
      </TouchableButton>
    </TouchableButton>
  )
}

export { TagCard, }
