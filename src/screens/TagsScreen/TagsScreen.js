import React, { Component, } from 'react'
import { View, } from 'react-native'
import { TouchableButton, Icon, NewTagPopup, } from '../../components'
import { TagsListContainer, } from '../../redux/containers'
import styles from './style'

class TagsScreen extends Component {
  state = { isNewTag: false, newTagName: '', }

  static navigationOptions = {
    title: 'All Tags',
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

  togglePopup = (newTagName = '') => {
    this.setState(prevState => ({ isNewTag: !prevState.isNewTag, newTagName, }))
  }

  render() {
    const { addTag, tagsList, } = this.props
    const { isNewTag, newTagName, } = this.state
    const { container, createBtn, } = styles

    return (
      <View style={container}>
        <TagsListContainer
          toDetails={this.toDetails}
          toEdit={this.toEdit}
          addNewTag={this.togglePopup}
        />
        <TouchableButton style={createBtn} onPress={() => this.togglePopup('')}>
          <Icon name='plus' size={33} color='#ffffff' />
        </TouchableButton>
        {isNewTag && (
          <NewTagPopup
            closePopup={this.togglePopup}
            name={newTagName}
            addTag={addTag}
            tagsList={tagsList}
          />
        )}
      </View>
    )
  }
}

export { TagsScreen, }
