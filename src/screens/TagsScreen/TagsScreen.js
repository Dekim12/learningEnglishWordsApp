import React, { Component, } from 'react'
import { View, } from 'react-native'
import { TouchableButton, Icon, NewTagPopup, } from '../../components'
import { TagsListContainer, } from '../../redux/containers'
import styles from './style'

class TagsScreen extends Component {
  state = { isNewTag: false, newTagName: '', }

  toDetails = (tagName) => {
    const { toTagDetails, componentId, } = this.props
    toTagDetails(componentId, tagName)
  }

  toEdit = (tagName) => {
    const { toEditTag, componentId, } = this.props
    toEditTag(componentId, tagName)
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
          <Icon name='plus' size={33} />
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
