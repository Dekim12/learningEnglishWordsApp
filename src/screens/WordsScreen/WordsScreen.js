import React, { Component, } from 'react'
import { View, StatusBar, } from 'react-native'
import { WordListContainer, } from '../../redux/containers'
import { TouchableButton, Icon, PermissionPopup, } from '../../components'
import { WORDS_DETAILS_SCREEN, NEW_WORD_SCREEN, } from '../../constants'
import styles from './style'

class WordsScreen extends Component {
  state = {
    permissionVisible: false,
    permissionResolve: null,
  }

  static navigationOptions = {
    title: 'All Words',
  }

  toDescription = (id, word) => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate(WORDS_DETAILS_SCREEN, { id, word, })
  }

  toNewWord = (word) => {
    const {
      navigation: { navigate, },
    } = this.props

    if (!word) {
      navigate(NEW_WORD_SCREEN)
    } else {
      navigate(NEW_WORD_SCREEN, { newWord: word, })
    }
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
    const { container, addButton, } = styles

    return (
      <View style={container}>
        <StatusBar hidden />
        <WordListContainer
          openDescription={this.toDescription}
          setPermission={this.setPermissionFunctions}
          addNewWord={this.toNewWord}
        />
        <TouchableButton style={addButton} onPress={this.toNewWord}>
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
