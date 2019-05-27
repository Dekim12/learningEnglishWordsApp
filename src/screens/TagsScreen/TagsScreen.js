import React, { Component, } from 'react'
import { View, } from 'react-native'
import { TouchableButton, Icon, } from '../../components'
import { TagsListContainer, } from '../../redux/containers'
import styles from './style'

class TagsScreen extends Component {
  static navigationOptions = {
    title: 'Tags',
  }

  toDetails = (tagName) => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate('TagDetails', { tagName, })
  }

  toEdit = (tagName) => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate('EditTag', { tagName, })
  }

  render() {
    const { container, createBtn, } = styles

    return (
      <View style={container}>
        <TagsListContainer toDetails={this.toDetails} toEdit={this.toEdit} />
        <TouchableButton style={createBtn} onPress={() => {}}>
          <Icon name='plus' size={33} color='#ffffff' />
        </TouchableButton>
      </View>
    )
  }
}

export { TagsScreen, }
