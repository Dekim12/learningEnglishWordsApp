import React, { Component, } from 'react'
import { View, } from 'react-native'
import { TouchableButton, Icon, NewTagPopup, } from '../../components'
import { TagsListContainer, } from '../../redux/containers'
import styles from './style'
import { TAG_DETAILS_SCREEN, EDIT_TAG_SCREEN, } from '../../constants'

class TagsScreen extends Component {
  state = { isNewTag: false, newTagName: '', }

  static navigationOptions = {
    title: 'All Tags',
  }

  toDetails = (tagName) => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate(TAG_DETAILS_SCREEN, { tagName, })
  }

  toEdit = (tagName) => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate(EDIT_TAG_SCREEN, { tagName, })
  }

  togglePopup = newTagName => this.setState(prevState => ({ isNewTag: !prevState.isNewTag, newTagName, }))

  openPopup = () => this.setState(prevState => ({
    isNewTag: !prevState.isNewTag,
    newTagName: '',
  }))

  render() {
    const { addTag, tagsList, } = this.props
    const { isNewTag, newTagName, } = this.state

    return (
      <View style={styles.container}>
        <TagsListContainer
          toDetails={this.toDetails}
          toEdit={this.toEdit}
          addNewTag={this.togglePopup}
        />
        <TouchableButton style={styles.createBtn} onPress={this.openPopup}>
          <Icon name='plus' size={33} color='#ffffff' />
        </TouchableButton>
        {isNewTag && (
          <NewTagPopup
            closePopup={this.openPopup}
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
