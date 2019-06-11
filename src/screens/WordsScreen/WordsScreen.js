import React, { Component, } from 'react'
import { View, StatusBar, } from 'react-native'
import { WordListContainer, } from '../../redux/containers/WordListContainer'
import { TouchableButton, Icon, PermissionPopup, } from '../../components'
import styles from './style'

class WordsScreen extends Component {
  state = {
    permissionVisible: false,
    permissionResolve: null,
  }

  toDescription = (id, word) => {
    const { componentId, toWordDescription, } = this.props
    toWordDescription(componentId, id, word)
  }

  toNewWord = (word) => {
    const { componentId, createNewWord, } = this.props
    createNewWord(componentId, word)
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
