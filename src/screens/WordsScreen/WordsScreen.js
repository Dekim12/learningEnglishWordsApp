import React, { Component, } from 'react'
import { View, StatusBar, } from 'react-native'
import { WordListContainer, } from '../../redux/containers/WordListContainer'
import { TouchableButton, Icon, PermissionPopup, } from '../../components'
import { MOVEMENT_FUNC_NAMES, } from '../../constants'
import styles from './style'

class WordsScreen extends Component {
  constructor(props) {
    super(props)

    this.state = { permissionVisible: false, permissionResolve: null, }
  }

  toDescription = (id, word) => {
    const { componentId, changeScreen, } = this.props
    changeScreen(MOVEMENT_FUNC_NAMES.wordDescription, componentId, id, word)
  }

  toNewWord = (word) => {
    const { componentId, changeScreen, } = this.props
    changeScreen(
      MOVEMENT_FUNC_NAMES.newWord,
      componentId,
      typeof word === 'string' ? word : ''
    )
  }

  setPermissionFunctions = (resolve) => {
    this.setState({
      permissionVisible: true,
      permissionResolve: resolve,
    })
  }

  refreshPermission = () => {
    this.setState({
      permissionVisible: false,
      permissionResolve: null,
    })
  }

  render() {
    const { permissionVisible, permissionResolve, } = this.state

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <WordListContainer
          openDescription={this.toDescription}
          setPermission={this.setPermissionFunctions}
          addNewWord={this.toNewWord}
        />
        <TouchableButton style={styles.addButton} onPress={this.toNewWord}>
          <Icon name='plus' size={33} color='#ffffff' />
        </TouchableButton>
        {permissionVisible && (
          <PermissionPopup
            resolve={permissionResolve}
            refresh={this.refreshPermission}
            isWord
          />
        )}
      </View>
    )
  }
}

export { WordsScreen, }
