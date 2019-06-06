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
import { ROOT_TASKS_SCREEN, } from '../../constants'
import styles from './style'

class SettingsScreen extends Component {
  constructor(props) {
    super(props)
    const { tagsForTask, amountOfWords, isRandom, allTags, } = this.props

    this.state = { tagsForTask, isRandom, allTags, isAmountCorrect: true, }

    this.newWordsAmount = amountOfWords
  }

  static navigationOptions = {
    title: 'Tasks Settings',
    headerTitleContainerStyle: {
      marginRight: 40,
    },
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
        allTags: false,
      })
    } else {
      const newList = tagsForTask.concat(tagName)
      const isAllTags = tagsList.length === newList.length

      this.setState({ tagsForTask: newList, allTags: isAllTags, })
    }
  }

  handlerAllTaskButton = () => {
    const { allTags, } = this.state
    const { tagsList, } = this.props

    if (allTags) {
      this.setState({ allTags: false, tagsForTask: [], })
    } else {
      this.setState({ allTags: true, tagsForTask: tagsList, })
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
    const { tagsForTask, allTags, } = this.state

    if (allTags) {
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
    const { setSettings, navigation, } = this.props
    const { tagsForTask, isRandom, allTags, isAmountCorrect, } = this.state

    if (isAmountCorrect && this.defineTotalAmountOfWords()) {
      setSettings({
        tagsForTask,
        allTags,
        random: isRandom,
        amountOfWords: this.newWordsAmount,
      })

      navigation.navigate(ROOT_TASKS_SCREEN)
    }
  }

  render() {
    const { tagsList, amountOfWords, } = this.props
    const { allTags, isRandom, isAmountCorrect, } = this.state

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
              allTags && styles.activeTag
            ]}
            onPress={this.handlerAllTaskButton}
          >
            <Text style={[styles.textStyle, allTags && styles.allTagsActive]}>
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
