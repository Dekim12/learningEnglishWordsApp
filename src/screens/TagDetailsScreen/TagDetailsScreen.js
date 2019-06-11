import React, { Component, } from 'react'
import { Text, FlatList, ScrollView, View, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { Icon, TouchableButton, PermissionPopup, } from '../../components'
import { createLine, } from '../../utils'
import styles from './style'

class TagDetailsScreen extends Component {
  state = {
    permissionVisible: false,
    permissionResolve: null,
  }

  renderWords = ({ item, }) => {
    const { deleteWord, } = this.props

    const deleteCurrentWord = () => this.setPermissionFunctions(() => deleteWord(item.id))

    // const toWordScreen = () => navigation.navigate(WORDS_DETAILS_SCREEN, {
    //   id: item.id,
    //   word: item.word,
    // })

    const toWordScreen = () => {}

    return (
      <TouchableButton style={styles.wordItem} onPress={toWordScreen}>
        <Text style={styles.wordStyle}>{item.word}</Text>
        <Text style={styles.transcriptionStyle}>{item.transcription}</Text>
        <Text style={styles.translationStyle}>
          {createLine(item.translation)}
        </Text>
        <TouchableButton style={styles.deleteBtn} onPress={deleteCurrentWord}>
          <Icon name='trash-alt' size={29} color='#2d862d' />
        </TouchableButton>
      </TouchableButton>
    )
  }

  toCreateWordScreen = () => {
    const { createNewWord, componentId, } = this.props
    createNewWord(componentId)
  }

  keyExtractor = () => uuidv4()

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
    const { tagsWordsList, } = this.props
    const { permissionVisible, permissionResolve, } = this.state

    return (
      <View style={styles.wrapper}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentStyle}
        >
          <FlatList
            style={styles.wordsBlock}
            data={tagsWordsList}
            renderItem={this.renderWords}
            keyExtractor={this.keyExtractor}
          />
          <TouchableButton
            style={styles.addBtn}
            onPress={this.toCreateWordScreen}
          >
            <Text style={styles.addText}>ADD NEW WORD</Text>
          </TouchableButton>
        </ScrollView>
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

export { TagDetailsScreen, }
