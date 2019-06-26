// @flow

import React, { Component, } from 'react'
import { View, } from 'react-native'
import { TouchableButton, Icon, NewTagPopup, } from '../../components'
import { TagsListContainer, } from '../../redux/containers'
import { MOVEMENT_FUNC_NAMES, } from '../../constants'
import { addTag, } from '../../redux/actions'
import styles from './style'

type Props = {
  componentId: string,
  changeScreen: (functionName: string, ...args: Array<any>) => void,
  addTag: typeof addTag,
  tagsList: Array<string> | []
}

type State = {
  isNewTag: boolean,
  newTagName: string
}

class TagsScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { isNewTag: false, newTagName: '', }
  }

  toDetails = (tagName: string): void => {
    const { changeScreen, componentId, } = this.props
    changeScreen(MOVEMENT_FUNC_NAMES.tagDetails, componentId, tagName)
  }

  toEdit = (tagName: string): void => {
    const { changeScreen, componentId, } = this.props
    changeScreen(MOVEMENT_FUNC_NAMES.editTag, componentId, tagName)
  }

  togglePopup = (newTagName: string): void => this.setState(prevState => ({ isNewTag: !prevState.isNewTag, newTagName, }))

  openPopup = (): void => this.setState(prevState => ({
    isNewTag: !prevState.isNewTag,
    newTagName: '',
  }))

  render() {
    const { tagsList, } = this.props
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
            addTag={this.props.addTag}
            tagsList={tagsList}
          />
        )}
      </View>
    )
  }
}

export { TagsScreen, }
