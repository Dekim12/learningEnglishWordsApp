import React, { Component, } from 'react'
import { ScrollView, Text, View, TextInput, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TouchableButton, Icon, PermissionPopup, } from '../../components'
import { MOVEMENT_FUNC_NAMES, } from '../../constants'
import styles from './style'

class EditTagScreen extends Component {
  constructor(props) {
    super(props)
    const { tagName, tagWords, } = this.props

    this.state = {
      currentName: tagName,
      wordsList: tagWords,
      deletedWordsList: [],
      isTagExist: false,
      changeInputQuery: '',
      permissionVisible: false,
    }
  }

  handleChangeText = (text) => {
    const { tagsList, tagName, } = this.props

    const replacedText = text.replace(/^\s+|\s+$/g, '')

    if (tagsList.indexOf(replacedText) >= 0 && replacedText !== tagName) {
      this.setState({ isTagExist: true, changeInputQuery: text, })
    } else {
      this.setState({ changeInputQuery: text, isTagExist: false, })
    }
  }

  handleSubmit = () => {
    const { currentName, isTagExist, changeInputQuery, } = this.state

    if (changeInputQuery && changeInputQuery !== currentName && !isTagExist) {
      this.setState({
        currentName: changeInputQuery.replace(/^\s+|\s+$/g, ''),
      })
    }
  }

  deleteWord = id => this.setState(prevState => ({
    deletedWordsList: prevState.deletedWordsList.concat(id),
    wordsList: prevState.wordsList.filter(word => word.id !== id),
  }))

  generateWordsList = words => words.map(({ word, id, }) => {
    const deleteCurrentWord = () => this.deleteWord(id)

    return (
      <View style={styles.wordItem} key={uuidv4()}>
        <Text style={styles.wordItemText}>{word}</Text>
        <TouchableButton
          style={styles.wordItemDeleteBtn}
          onPress={deleteCurrentWord}
        >
          <Icon name='times-circle' size={22} color='#ffb380' />
        </TouchableButton>
      </View>
    )
  })

  edit = () => {
    const { editCurrentTag, tagName, changeScreen, componentId, } = this.props
    const { currentName, deletedWordsList, } = this.state

    if (currentName || deletedWordsList.length) {
      editCurrentTag(tagName, currentName, deletedWordsList)
    }

    changeScreen(MOVEMENT_FUNC_NAMES.back, componentId)
  }

  refreshPermission = () => this.setState({
    permissionVisible: false,
  })

  handlePermission = () => this.setState({
    permissionVisible: true,
  })

  deleteTag = () => {
    const { deleteCurrentTag, changeScreen, componentId, } = this.props

    deleteCurrentTag()
    changeScreen(MOVEMENT_FUNC_NAMES.back, componentId)
  }

  render() {
    const { currentName, wordsList, isTagExist, permissionVisible, } = this.state

    return (
      <View style={styles.wrapper}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.currentWord}>{currentName}</Text>
          <Text style={styles.definition}>NEW TAG NAME</Text>
          <View style={styles.inputBlock}>
            <TextInput
              defaultValue={currentName}
              placeholder='New tag name...'
              placeholderTextColor='white'
              style={styles.textInput}
              autoCorrect={false}
              clearButtonMode='always'
              underlineColorAndroid='transparent'
              autoCapitalize='words'
              onChangeText={this.handleChangeText}
              onSubmitEditing={this.handleSubmit}
            />
            <TouchableButton
              style={styles.inputBtn}
              onPress={this.handleSubmit}
            >
              <Icon name='plus-circle' size={35} />
            </TouchableButton>
          </View>
          {isTagExist && (
            <Text style={styles.alert}>This tag name already exists.</Text>
          )}
          <Text style={styles.definition}>WORDS</Text>
          {!wordsList.length && (
            <Text style={styles.alert}>The words list is empty</Text>
          )}
          <View style={styles.wordsBlock}>
            {this.generateWordsList(wordsList)}
          </View>
          <TouchableButton
            style={[styles.btn, styles.deleteBtn]}
            onPress={this.handlePermission}
          >
            <Text style={styles.btnText}>DELETE</Text>
          </TouchableButton>
          <TouchableButton style={styles.btn} onPress={this.edit}>
            <Text style={styles.btnText}>EDIT</Text>
          </TouchableButton>
        </ScrollView>
        {permissionVisible && (
          <PermissionPopup
            resolve={this.deleteTag}
            refresh={this.refreshPermission}
          />
        )}
      </View>
    )
  }
}

export { EditTagScreen, }
