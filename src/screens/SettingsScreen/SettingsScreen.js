import React, { Component, } from 'react'
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
import styles from './style'

class SettingsScreen extends Component {
  constructor(props) {
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

  handleChangeText = (text) => {
    const { isAmountCorrect, } = this.state

    if (isNumber(text) && Number(text) !== 0) {
      this.newWordsAmount = text

      if (!isAmountCorrect) {
        this.setState({ isAmountCorrect: true, })
      }
    } else {
      this.setState({ isAmountCorrect: false, })
    }
  }

  toggleTag = (tagName) => {
    const { tagsForTask, } = this.state
    const { tagsList, } = this.props

    if (tagsForTask.indexOf(tagName) !== -1) {
      this.setState({
        tagsForTask: tagsForTask.filter(tag => tag !== tagName),
        useAllTags: false,
      })
    } else {
      const newList = tagsForTask.concat(tagName)
      const isAllTags = tagsList.length === newList.length

      this.setState({ tagsForTask: newList, useAllTags: isAllTags, })
    }
  }

  handlerAllTaskButton = () => {
    const { useAllTags, } = this.state
    const { tagsList, } = this.props

    if (useAllTags) {
      this.setState({ useAllTags: false, tagsForTask: [], })
    } else {
      this.setState({ useAllTags: true, tagsForTask: tagsList, })
    }
  }

  generateTagsItems = (tagsList) => {
    const { tagsForTask, } = this.state

    return tagsList.map((tag) => {
      const isTagSelected = tagsForTask.indexOf(tag) !== -1

      const addTag = () => {
        this.toggleTag(tag)
      }

      return (
        <TouchableButton
          style={[styles.tagItem, isTagSelected && styles.activeTag]}
          onPress={addTag}
          key={uuidv4()}
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

  defineTotalAmountOfWords = () => {
    const { wordsList, } = this.props
    const { tagsForTask, useAllTags, } = this.state

    if (useAllTags) {
      return wordsList.length
    }

    return wordsList.reduce((sum, word) => {
      if (tagsForTask.indexOf(word.tagName) !== -1) {
        return sum + 1
      }
      return sum
    }, 0)
  }

  handleRandom = () => this.setState(prevState => ({ isRandom: !prevState.isRandom, }))

  confirmSettings = () => {
    const { setSettings, goBack, componentId, } = this.props
    const { tagsForTask, isRandom, useAllTags, isAmountCorrect, } = this.state

    if (isAmountCorrect && this.defineTotalAmountOfWords()) {
      setSettings({
        tagsForTask,
        useAllTags,
        random: isRandom,
        amountOfWords: this.newWordsAmount,
      })

      goBack(componentId)
    }
  }

  render() {
    const { tagsList, amountOfWords, } = this.props
    const { useAllTags, isRandom, isAmountCorrect, } = this.state

    const totalAmountOfWords = this.defineTotalAmountOfWords()

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
            <Text style={styles.alert}>Please select some tag with words.</Text>
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
            <Text style={styles.alert}>
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
          >
            <Text style={styles.editText}>CONFIRM</Text>
          </TouchableButton>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export { SettingsScreen, }
