import React, { Component, } from 'react'
import { ScrollView, Text, View, TextInput, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TouchableButton, Icon, PermissionPopup, } from '../../components'
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

  static navigationOptions = {
    title: 'Edit Tag',
    headerTitleContainerStyle: {
      marginRight: 50,
    },
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
        <Text
          style={{
            fontFamily: 'OpenSans',
            color: 'white',
            fontSize: 20,
          }}
        >
          {word}
        </Text>
        <TouchableButton
          style={{ marginLeft: 12, marginTop: 4, }}
          onPress={deleteCurrentWord}
        >
          <Icon name='times-circle' size={22} color='#ffb380' />
        </TouchableButton>
      </View>
    )
  })

  edit = () => {
    const { editCurrentTag, navigation, tagName, } = this.props
    const { currentName, deletedWordsList, } = this.state

    if (currentName || deletedWordsList.length) {
      editCurrentTag(tagName, currentName, deletedWordsList)
    }
    navigation.navigate('Tags')
  }

  refreshPermission = () => this.setState({
    permissionVisible: false,
  })

  handlePermission = () => this.setState({
    permissionVisible: true,
  })

  deleteTag = () => {
    const { deleteCurrentTag, navigation, } = this.props

    navigation.navigate('Tags')
    deleteCurrentTag()
  }

  render() {
    const { currentName, wordsList, isTagExist, permissionVisible, } = this.state
    const {
      container,
      currentWord,
      definition,
      inputBlock,
      textInput,
      inputBtn,
      wordsBlock,
      btn,
      btnText,
      alert,
    } = styles

    return (
      <View style={{ flex: 1, }}>
        <ScrollView
          style={container}
          contentContainerStyle={{ alignItems: 'center', }}
        >
          <Text style={currentWord}>{currentName}</Text>
          <Text style={definition}>NEW TAG NAME</Text>
          <View style={inputBlock}>
            <TextInput
              defaultValue={currentName}
              placeholder='New tag name...'
              placeholderTextColor='white'
              style={textInput}
              autoCorrect={false}
              clearButtonMode='always'
              underlineColorAndroid='transparent'
              autoCapitalize='words'
              onChangeText={this.handleChangeText}
              onSubmitEditing={this.handleSubmit}
            />
            <TouchableButton style={inputBtn} onPress={this.handleSubmit}>
              <Icon name='plus-circle' size={35} color='white' />
            </TouchableButton>
          </View>
          {isTagExist && (
            <Text style={alert}>This tag name already exists.</Text>
          )}
          <Text style={[definition, { marginTop: 30, }]}>WORDS</Text>
          {!wordsList.length && (
            <Text style={alert}>The words list is empty</Text>
          )}
          <View style={wordsBlock}>{this.generateWordsList(wordsList)}</View>
          <TouchableButton
            style={[btn, { marginTop: 30, backgroundColor: '#ac3939', }]}
            onPress={this.handlePermission}
          >
            <Text style={btnText}>DELETE</Text>
          </TouchableButton>
          <TouchableButton
            style={[btn, { marginBottom: 27, }]}
            onPress={this.edit}
          >
            <Text style={btnText}>EDIT</Text>
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
