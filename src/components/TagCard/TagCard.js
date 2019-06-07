import React from 'react'
import { Text, } from 'react-native'
import { Icon, TouchableButton, } from '../index'
import styles from './style'

const TagCard = ({ name, toEdit, isFirstCard, toDetails, }) => {
  const openDetails = () => {
    toDetails(name)
  }

  const editTag = () => {
    toEdit(name)
  }

  return (
    <TouchableButton
      onPress={openDetails}
      style={[styles.container, isFirstCard && styles.firstElem]}
    >
      <Text style={styles.tagName}>
        <Text style={styles.hashtag}>#</Text>
        {name}
      </Text>
      <TouchableButton onPress={editTag} style={styles.editBtn}>
        <Icon name='pen-square' color='#2d862d' />
      </TouchableButton>
    </TouchableButton>
  )
}

export { TagCard, }
