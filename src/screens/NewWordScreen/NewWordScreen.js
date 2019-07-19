// @flow

import React, { Component, type Node, } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, type ViewStyleProp, } from 'react-native'
import FastImage from 'react-native-fast-image'
import uuidv4 from 'uuid/v4'

import { TouchableButton, Input, Icon, } from '../../components'
import { EDIT_TYPES, MOVEMENT_FUNC_NAMES, } from '../../constants'
import { addNewWord, } from '../../redux/actions'
import styles from './style'

type Props = {
  componentId: string,
  changeScreen: (functionName: string, ...args: Array<any>) => void,
  addNewWord: typeof addNewWord,
  tagsList: Array<string>
}

type State = {
  word: ?string,
  transcription: ?string,
  translation: Array<string>,
  url: ?string,
  examples: Array<string>,
  tagName: ?string,
  id: number
}

class NewWordScreen extends Component<Props, State> {
  state = {
    word: null,
    transcription: null,
    translation: [],
    examples: [],
    tagName: null,
    url:
      'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?cs=srgb&dl=apple-comida-fruta-102104.jpg&fm=jpg',
    id: +uuidv4(),
  }

  setNewValue = (newValue: string, type: string): void => {
    switch (type) {
      case EDIT_TYPES.definition:
        this.setState({ word: newValue.toLowerCase(), })
        break
      case EDIT_TYPES.transcription:
        this.setState({ transcription: `[${newValue.toLowerCase()}]`, })
        break
      case EDIT_TYPES.url:
        this.setState({ url: newValue, })
        break
      case EDIT_TYPES.tag:
        this.setState({ tagName: newValue, })
        break
      case EDIT_TYPES.word:
        this.setState(prevState => ({
          translation: prevState.translation.concat(newValue),
        }))
        break
      case EDIT_TYPES.string:
        this.setState(prevState => ({
          examples: prevState.examples.concat(newValue),
        }))
        break
      default:
        break
    }
  }

  removeItems = (value: string, type: string): void => {
    if (type === EDIT_TYPES.word) {
      this.setState(prevState => ({
        translation: prevState.translation.filter(item => item !== value),
      }))
    } else {
      this.setState(prevState => ({
        examples: prevState.examples.filter(item => item !== value),
      }))
    }
  }

  generateItems = (itemsList: Array<string>, type: string): Array<Node> => {
    const currentStyle: ViewStyleProp = {}

    if (type === EDIT_TYPES.word) {
      currentStyle.item = styles.translationItem
      currentStyle.btn = styles.deleteItemBtn
    } else {
      currentStyle.item = styles.exampleItem
      currentStyle.btn = styles.exampleButton
    }

    return itemsList.map((item: string) => {
      const removeCurrentValue = (): void => this.removeItems(item, type)

      return (
        <View style={currentStyle.item} key={uuidv4()}>
          <Text style={styles.itemText}>{item}</Text>
          <TouchableButton
            style={currentStyle.btn}
            onPress={removeCurrentValue}
          >
            <Icon name='times-circle' size={22} color='#ffb380' />
          </TouchableButton>
        </View>
      )
    })
  }

  generateTags = (currentTag: ?string, tagsList: Array<string>): Array<Node> => tagsList.map((tag: string) => {
    const addTag = (): void => this.setNewValue(tag, EDIT_TYPES.tag)

    return (
      <TouchableButton
        style={[
          styles.tagItem,
          currentTag && currentTag === tag && styles.activeTagColor
        ]}
        key={uuidv4()}
        onPress={addTag}
      >
        <Text
          style={[
            styles.tagItemText,
            currentTag && currentTag === tag && styles.inactiveTagColor
          ]}
        >
          {tag}
        </Text>
      </TouchableButton>
    )
  })

  addCurrentWord = () => {
    const { changeScreen, componentId, } = this.props

    this.props.addNewWord(this.state)
    changeScreen(MOVEMENT_FUNC_NAMES.back, componentId)
  }

  render() {
    const { tagsList, } = this.props
    const {
      word,
      transcription,
      url,
      translation,
      examples,
      tagName,
    } = this.state

    return (
      <KeyboardAvoidingView behavior='padding'>
        <ScrollView contentContainerStyle={styles.container}>
          {word && <Text style={styles.currentWord}>{word}</Text>}
          <Input
            placeholder='Add word...'
            style={styles.textInput}
            onSubmit={this.setNewValue}
            type={EDIT_TYPES.definition}
          />
          {transcription && (
            <Text style={styles.wordTranscription}>{transcription}</Text>
          )}
          <Input
            placeholder='Add transcription...'
            style={styles.textInput}
            type={EDIT_TYPES.transcription}
            onSubmit={this.setNewValue}
          />
          {url && (
            <FastImage
              style={styles.imageStyle}
              source={{
                uri: url,
                priority: FastImage.priority.high,
              }}
            />
          )}
          <Input
            placeholder='Add image url...'
            style={styles.textInput}
            type={EDIT_TYPES.url}
            onSubmit={this.setNewValue}
          />
          {this.generateItems(translation, EDIT_TYPES.word)}
          <Input
            placeholder='Add translation...'
            style={styles.textInput}
            type={EDIT_TYPES.word}
            onSubmit={this.setNewValue}
          />
          {this.generateItems(examples, EDIT_TYPES.string)}
          <Input
            placeholder='Add example...'
            style={styles.textInput}
            type={EDIT_TYPES.string}
            onSubmit={this.setNewValue}
          />
          <Text style={styles.definition}>TAGS:</Text>
          <View style={[styles.translationBlock, styles.tagsBlock]}>
            {this.generateTags(tagName, tagsList)}
          </View>
          <TouchableButton style={styles.editBtn} onPress={this.addCurrentWord}>
            <Text style={styles.editText}>CREATE WORD</Text>
          </TouchableButton>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export { NewWordScreen, }
