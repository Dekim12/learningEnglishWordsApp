// @flow

import React, { Component, } from 'react'
import type { Node, } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, } from 'react-native'
import type { ViewStyleProp, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TouchableButton, Icon, Input, } from '../../components'
import { EDIT_TYPES, MOVEMENT_FUNC_NAMES, } from '../../constants'
import { editWord, } from '../../redux/actions'
import type { WordObjType, } from '../../flowAliases'
import styles from './style'

type Props = {
  componentId: string,
  changeScreen: (functionName: string, ...args: Array<any>) => void,
  editWord: typeof editWord,
  tagsList: Array<string>,
  wordData: WordObjType
}

type State = {
  submit: boolean,
  word: string,
  transcription: string,
  translation: Array<string>,
  url: ?string,
  examples: Array<string>,
  tagName: string,
  id: number
}

class EditWordScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const {
      wordData: { id, word, transcription, translation, url, examples, tagName, },
    } = this.props

    this.state = {
      submit: false,
      word,
      transcription,
      translation,
      examples,
      tagName,
      url,
      id,
    }
  }

  deleteWordOrExample = (value: string, type: string): void => {
    if (type === EDIT_TYPES.word) {
      this.setState(prevState => ({
        translation: prevState.translation.filter(word => word !== value),
      }))
    } else if (type === EDIT_TYPES.string) {
      this.setState(prevState => ({
        examples: prevState.examples.filter(string => string !== value),
      }))
    }
  }

  addTagOrUrl = (value: string, type: string): void => {
    if (type === EDIT_TYPES.url) {
      this.setState({ url: value, })
    } else if (type === EDIT_TYPES.tag) {
      this.setState({
        tagName: value,
      })
    }
  }

  addWordOrExample = (value: string, type: string): void => {
    if (type === EDIT_TYPES.word) {
      this.setState(prevState => ({
        submit: false,
        translation: prevState.translation.concat(value),
      }))
    } else if (type === EDIT_TYPES.string) {
      this.setState(prevState => ({
        submit: false,
        examples: prevState.examples.concat(value),
      }))
    }
  }

  generateItem = (itemsList: Array<string>, type: string): Array<Node> => {
    const currentStyle: { item?: ViewStyleProp, btn?: ViewStyleProp } = {}
    let testID: string = 'example-item'

    if (type === EDIT_TYPES.word) {
      currentStyle.item = styles.translationItem
      currentStyle.btn = styles.deleteItemBtn
      testID = 'translation-item'
    } else {
      currentStyle.item = styles.exampleItem
      currentStyle.btn = styles.exampleButton
    }

    return itemsList.map((item: string) => {
      const deleteCurrentValue = (): void => this.deleteWordOrExample(item, type)

      return (
        <View style={currentStyle.item} key={uuidv4()} testID={testID}>
          <Text style={styles.itemText}>{item}</Text>
          <TouchableButton
            style={currentStyle.btn}
            onPress={deleteCurrentValue}
          >
            <Icon name='times-circle' size={22} color='#ffb380' />
          </TouchableButton>
        </View>
      )
    })
  }

  generateTags = (currentTag: string, tagsList: Array<string>): Array<Node> => {
    const currentTagIndex = tagsList.findIndex(item => item === currentTag)

    return tagsList.map((tag: string, index: number) => {
      const addTag = (): void => this.addTagOrUrl(tag, EDIT_TYPES.tag)

      return (
        <TouchableButton
          style={[
            styles.tagItem,
            index === currentTagIndex && styles.activeTagColor
          ]}
          key={uuidv4()}
          onPress={addTag}
          testID='tag-item'
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

  setSubmit = (): void => this.setState({ submit: true, })

  edit = (): void => {
    const { changeScreen, componentId, } = this.props
    const { submit, ...newWordData } = this.state
    this.props.editWord(newWordData)
    changeScreen(MOVEMENT_FUNC_NAMES.back, componentId)
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
            {this.generateItem(translation, EDIT_TYPES.word)}
          </View>
          <View style={styles.inputBlock}>
            <Input
              placeholder='Add translation...'
              style={styles.textInput}
              submit={submit}
              type={EDIT_TYPES.word}
              onSubmit={this.addWordOrExample}
            />
            <TouchableButton style={styles.inputBtn} onPress={this.setSubmit}>
              <Icon name='plus-circle' size={33} />
            </TouchableButton>
          </View>
          <Text style={styles.definition}>NEW IMAGE:</Text>
          <View style={styles.inputBlock}>
            <Input
              placeholder='Url...'
              style={styles.textInput}
              submit={submit}
              type={EDIT_TYPES.url}
              onSubmit={this.addTagOrUrl}
            />
            <TouchableButton style={styles.inputBtn} onPress={this.setSubmit}>
              <Icon name='plus-circle' size={35} />
            </TouchableButton>
          </View>
          <Text style={styles.definition}>EXAMPLES:</Text>
          <View style={styles.examplesBlock}>
            {this.generateItem(examples, EDIT_TYPES.string)}
          </View>
          <View style={styles.inputBlock}>
            <Input
              placeholder='Add example...'
              style={styles.textInput}
              submit={submit}
              type={EDIT_TYPES.string}
              onSubmit={this.addWordOrExample}
            />
            <TouchableButton style={styles.inputBtn} onPress={this.setSubmit}>
              <Icon name='plus-circle' size={35} />
            </TouchableButton>
          </View>
          <Text style={styles.definition}>TAGS:</Text>
          <View style={[styles.translationBlock, styles.tagsBlock]}>
            {this.generateTags(tagName, tagsList)}
          </View>
          <TouchableButton
            style={styles.editBtn}
            onPress={this.edit}
            testID='edit-word-btn'
          >
            <Text style={styles.editText}>EDIT</Text>
          </TouchableButton>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export { EditWordScreen, }
