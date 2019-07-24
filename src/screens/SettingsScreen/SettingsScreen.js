// @flow

import React, { Component, } from 'react'
import type { Node, } from 'react'
import {
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native'
import uuidv4 from 'uuid/v4'
import { TouchableButton, } from '../../components'
import { isNumber, } from '../../utils'
import { MOVEMENT_FUNC_NAMES, } from '../../constants'
import { setSettings, getSettingsList, } from '../../redux/actions'
import type { WordObjType, } from '../../flowAliases'
import styles from './style'

type Props = {
  componentId: string,
  changeScreen: (functionName: string, ...args: Array<any>) => void,
  allTags: boolean,
  amountOfWords: number,
  isRandom: boolean,
  setSettings: typeof setSettings,
  getSettingsList: typeof getSettingsList,
  tagsForTask: Array<string>,
  tagsList: Array<string>,
  wordsList: Array<WordObjType>
}

type State = {
  tagsForTask: Array<string>,
  isRandom: boolean,
  useAllTags: boolean,
  isAmountCorrect: boolean
}

class SettingsScreen extends Component<Props, State> {
  newWordsAmount: number

  constructor(props: Props) {
    super(props)
    const { tagsForTask, amountOfWords, isRandom, allTags, } = this.props

    this.state = {
      tagsForTask,
      isRandom,
      useAllTags: allTags,
      isAmountCorrect: true,
    }

    this.newWordsAmount = amountOfWords
  }

  handleChangeText = (text: string): void => {
    const { isAmountCorrect, } = this.state

    if (isNumber(text) && Number(text) !== 0) {
      this.newWordsAmount = Number(text)

      if (!isAmountCorrect) {
        this.setState({ isAmountCorrect: true, })
      }
    } else {
      this.setState({ isAmountCorrect: false, })
    }
  }

  componentDidMount = (): void => {
    this.props.getSettingsList()
  }

  toggleTag = (tagName: string): void => {
    const { tagsForTask, } = this.state
    const { tagsList, } = this.props

    if (tagsForTask.indexOf(tagName) !== -1) {
      this.setState({
        tagsForTask: tagsForTask.filter((tag: string) => tag !== tagName),
        useAllTags: false,
      })
    } else {
      const newList: Array<string> = tagsForTask.concat(tagName)
      const isAllTags: boolean = tagsList.length === newList.length

      this.setState({ tagsForTask: newList, useAllTags: isAllTags, })
    }
  }

  handlerAllTaskButton = (): void => {
    const { useAllTags, } = this.state
    const { tagsList, } = this.props

    if (useAllTags) {
      this.setState({
        useAllTags: false,
        tagsForTask: [],
      })
    } else {
      this.setState({ useAllTags: true, tagsForTask: tagsList, })
    }
  }

  generateTagsItems = (tagsList: Array<string>): Array<Node> => {
    const { tagsForTask, } = this.state

    return tagsList.map((tag: string) => {
      const isTagSelected: boolean = tagsForTask.indexOf(tag) !== -1

      const addTag = (): void => {
        this.toggleTag(tag)
      }

      return (
        <TouchableButton
          style={[styles.tagItem, isTagSelected && styles.activeTag]}
          onPress={addTag}
          key={uuidv4()}
          testID='tag-btn'
        >
          <Text
            style={[styles.textStyle, isTagSelected && styles.activeOrderStyle]}
          >
            {tag}
          </Text>
        </TouchableButton>
      )
    })
  }

  defineTotalAmountOfWords = (): number => {
    const { wordsList, } = this.props
    const { tagsForTask, useAllTags, } = this.state

    if (useAllTags) {
      return wordsList.length
    }

    return wordsList.reduce((sum: number, word: WordObjType) => {
      if (tagsForTask.indexOf(word.tagName) !== -1) {
        return sum + 1
      }
      return sum
    }, 0)
  }

  handleRandom = (): void => {
    this.setState(prevState => ({ isRandom: !prevState.isRandom, }))
  }

  confirmSettings = (): void => {
    const { changeScreen, componentId, } = this.props
    const { tagsForTask, isRandom, useAllTags, isAmountCorrect, } = this.state

    if (isAmountCorrect && this.defineTotalAmountOfWords()) {
      this.props.setSettings({
        tagsForTask,
        allTags: useAllTags,
        random: isRandom,
        amountOfWords: this.newWordsAmount,
      })

      changeScreen(MOVEMENT_FUNC_NAMES.back, componentId)
    }
  }

  render() {
    const { tagsList, amountOfWords, } = this.props
    const { useAllTags, isRandom, isAmountCorrect, } = this.state

    const totalAmountOfWords: number = this.defineTotalAmountOfWords()

    return (
      <KeyboardAvoidingView behavior='padding'>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.definition}>TAGS FOR TRAINING</Text>
          <View style={styles.tagsBlock}>
            {this.generateTagsItems(tagsList)}
          </View>
          <TouchableButton
            style={[
              styles.tagItem,
              styles.selectAllBtn,
              useAllTags && styles.activeTag
            ]}
            onPress={this.handlerAllTaskButton}
            testID='all-tags-btn'
          >
            <Text
              style={[styles.textStyle, useAllTags && styles.allTagsActive]}
            >
              All Tags
            </Text>
          </TouchableButton>
          <View style={styles.wordsBlock}>
            <Text style={styles.definition}>AMOUNT OF WORDS - </Text>
            <Text style={styles.valueStyle}>{totalAmountOfWords}</Text>
          </View>
          {!totalAmountOfWords && (
            <Text style={styles.alert} testID='tags-alert'>
              Please select some tag with words.
            </Text>
          )}
          <View style={styles.wordsBlock}>
            <Text style={styles.definition}>FOR TRAINING - </Text>
            <TextInput
              style={styles.inputStyle}
              defaultValue={amountOfWords.toString()}
              placeholder='Number'
              keyboardType='numeric'
              placeholderTextColor='white'
              autoCorrect={false}
              clearButtonMode='always'
              underlineColorAndroid='transparent'
              autoCapitalize='words'
              onChangeText={this.handleChangeText}
            />
          </View>
          {!isAmountCorrect && (
            <Text style={styles.alert} testID='words-amount-alert'>
              New amount of words is not correct.
            </Text>
          )}
          <Text style={[styles.definition, styles.wordOrderStyle]}>
            WORDS ORDER
          </Text>
          <View style={styles.tagsBlock}>
            <TouchableButton
              style={[styles.orderItem, !isRandom && styles.activeTag]}
              onPress={isRandom ? this.handleRandom : null}
              testID='cancel-random-btn'
            >
              <Text
                style={[styles.textStyle, !isRandom && styles.activeOrderStyle]}
              >
                sequential
              </Text>
            </TouchableButton>
            <TouchableButton
              style={[styles.orderItem, isRandom && styles.activeTag]}
              onPress={!isRandom ? this.handleRandom : null}
              testID='add-random-btn'
            >
              <Text
                style={[styles.textStyle, isRandom && styles.activeOrderStyle]}
              >
                random
              </Text>
            </TouchableButton>
          </View>
          <TouchableButton
            style={styles.editBtn}
            onPress={this.confirmSettings}
            testID='confirm-btn'
          >
            <Text style={styles.editText}>CONFIRM</Text>
          </TouchableButton>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export { SettingsScreen, }
