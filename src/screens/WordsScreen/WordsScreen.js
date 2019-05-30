import React, { Component, } from 'react'
import { View, } from 'react-native'
import { WordListContainer, } from '../../redux/containers'
import { TouchableButton, Icon, PermissionPopup, } from '../../components'
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

    navigate('WordDetails', { id, word, })
  }

  toNewWord = () => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate('NewWord')
  }

  addNewWord = (word) => {
    const {
      navigation: { navigate, },
    } = this.props

    navigate('NewWord', { newWord: word, })
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
        <WordListContainer
          openDescription={this.toDescription}
          setPermission={this.setPermissionFunctions}
          addNewWord={this.addNewWord}
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
