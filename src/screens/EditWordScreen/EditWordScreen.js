import React, { Component, } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TouchableButton, Icon, Input, } from '../../components'
import { WORDS_DETAILS_SCREEN, } from '../../constants'
import styles from './style'

const WORD = 'translationWord'
const STRING = 'exampleString'
const URL = 'urlString'
const TAG = 'tagString'

class EditWordScreen extends Component {
  constructor(props) {
    super(props)

    const { wordData, } = this.props

    this.state = { ...wordData, submit: false, }
  }

  static navigationOptions = {
    title: 'Edit Word',
    headerTitleContainerStyle: {
      marginRight: 50,
    },
  }

  deleteWordOrExample = (value, type) => {
    if (type === WORD) {
      this.setState(prevState => ({
        translation: prevState.translation.filter(word => word !== value),
      }))
    } else if (type === STRING) {
      this.setState(prevState => ({
        examples: prevState.examples.filter(string => string !== value),
      }))
    }
  }

  addTagOrUrl = (value, type) => {
    if (type === URL) {
      this.setState({ url: value, })
    } else if (type === TAG) {
      this.setState({
        tagName: value,
      })
    }
  }

  addWordOrExample = (value, type) => {
    if (type === WORD) {
      this.setState(prevState => ({
        submit: false,
        translation: prevState.translation.concat(value),
      }))
    } else if (type === STRING) {
      this.setState(prevState => ({
        submit: false,
        examples: prevState.examples.concat(value),
      }))
    }
  }

  generateTranslation = translationList => translationList.map((word) => {
    const deleteCurrentValue = () => this.deleteWordOrExample(word, WORD)

    return (
      <View style={styles.translationItem} key={uuidv4()}>
        <Text style={styles.itemText}>{word}</Text>
        <TouchableButton
          style={styles.deleteItemBtn}
          onPress={deleteCurrentValue}
        >
          <Icon name='times-circle' size={22} color='#ffb380' />
        </TouchableButton>
      </View>
    )
  })

  generateExamples = examples => examples.map((item) => {
    const deleteCurrentValue = () => this.deleteWordOrExample(item, STRING)

    return (
      <View style={styles.exampleItem} key={uuidv4()}>
        <Text style={styles.itemText}>{item}</Text>
        <TouchableButton
          style={styles.exampleButton}
          onPress={deleteCurrentValue}
        >
          <Icon name='times-circle' size={22} color='#ffb380' />
        </TouchableButton>
      </View>
    )
  })

  generateTags = (currentTag, tagsList) => {
    const currentTagIndex = tagsList.findIndex(item => item === currentTag)

    return tagsList.map((tag, index) => {
      const addTag = () => this.addTagOrUrl(tag, TAG)

      return (
        <TouchableButton
          style={[
            styles.tagItem,
            index === currentTagIndex && styles.activeTagColor
          ]}
          key={uuidv4()}
          onPress={addTag}
        >
          <Text
            style={[
              styles.tagItemText,
              index === currentTagIndex && styles.inactiveTagColor
            ]}
          >
            {tag}
          </Text>
        </TouchableButton>
      )
    })
  }

  setSubmit = () => this.setState({ submit: true, })

  edit = () => {
    const { editWord, navigation, } = this.props
    const newWord = { ...this.state, }
    delete newWord.submit

    editWord(newWord)
    navigation.navigate(WORDS_DETAILS_SCREEN, {
      id: newWord.id,
      word: newWord.word,
    })
  }

  render() {
    const { tagsList, } = this.props
    const {
      word,
      transcription,
      translation,
      tagName,
      examples,
      submit,
    } = this.state

    return (
      <KeyboardAvoidingView behavior='padding'>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.currentWord}>{word}</Text>
          <Text style={styles.wordTranscription}>{`[${transcription}]`}</Text>
          <Text style={styles.definition}>TRANSLATION:</Text>
          <View style={styles.translationBlock}>
            {this.generateTranslation(translation)}
          </View>
          <View style={styles.inputBlock}>
            <Input
              placeholder='Add translation...'
              style={styles.textInput}
              submit={submit}
              type={WORD}
              onSubmit={this.addWordOrExample}
            />
            <TouchableButton style={styles.inputBtn} onPress={this.setSubmit}>
              <Icon name='plus-circle' size={33} color='white' />
            </TouchableButton>
          </View>
          <Text style={styles.definition}>NEW IMAGE:</Text>
          <View style={styles.inputBlock}>
            <Input
              placeholder='Url...'
              style={styles.textInput}
              submit={submit}
              type={URL}
              onSubmit={this.addTagOrUrl}
            />
            <TouchableButton style={styles.inputBtn} onPress={this.setSubmit}>
              <Icon name='plus-circle' size={35} color='white' />
            </TouchableButton>
          </View>
          <Text style={styles.definition}>EXAMPLES:</Text>
          <View style={styles.examplesBlock}>
            {this.generateExamples(examples)}
          </View>
          <View style={styles.inputBlock}>
            <Input
              placeholder='Add example...'
              style={styles.textInput}
              submit={submit}
              type={STRING}
              onSubmit={this.addWordOrExample}
            />
            <TouchableButton style={styles.inputBtn} onPress={this.setSubmit}>
              <Icon name='plus-circle' size={35} color='white' />
            </TouchableButton>
          </View>
          <Text style={styles.definition}>TAGS:</Text>
          <View style={[styles.translationBlock, styles.tagsBlock]}>
            {this.generateTags(tagName, tagsList)}
          </View>
          <TouchableButton style={styles.editBtn} onPress={this.edit}>
            <Text style={styles.editText}>EDIT</Text>
          </TouchableButton>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export { EditWordScreen, }
