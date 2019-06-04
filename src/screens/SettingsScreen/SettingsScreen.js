import React, { Component, } from 'react'
import { Text, View, ScrollView, TextInput, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TouchableButton, } from '../../components'
import { isNumber, } from '../../utils'
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
    const { activeTag, tagItem, textStyle, } = styles

    return tagsList.map((tag) => {
      const isTagSelected = tagsForTask.indexOf(tag) !== -1

      const addTag = () => {
        this.toggleTag(tag)
      }

      return (
        <TouchableButton
          style={[tagItem, isTagSelected && activeTag]}
          onPress={addTag}
          key={uuidv4()}
        >
          <Text style={[textStyle, isTagSelected && { color: '#ffffff', }]}>
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

      navigation.navigate('Tasks')
    }
  }

  render() {
    const { tagsList, amountOfWords, } = this.props
    const { allTags, isRandom, isAmountCorrect, } = this.state
    const {
      container,
      definition,
      tagsBlock,
      tagItem,
      wordsBlock,
      valueStyle,
      inputStyle,
      textStyle,
      orderItem,
      editBtn,
      editText,
      activeTag,
      alert,
    } = styles

    const totalAmountOfWords = this.defineTotalAmountOfWords()

    return (
      <ScrollView
        style={container}
        contentContainerStyle={{ alignItems: 'center', }}
      >
        <Text style={definition}>TAGS FOR TRAINING</Text>
        <View style={tagsBlock}>{this.generateTagsItems(tagsList)}</View>
        <TouchableButton
          style={[
            tagItem,
            { paddingHorizontal: 110, marginBottom: 35, },
            allTags && activeTag
          ]}
          onPress={this.handlerAllTaskButton}
        >
          <Text style={[textStyle, allTags && { color: '#ffffff', }]}>
            All Tags
          </Text>
        </TouchableButton>
        <View style={wordsBlock}>
          <Text style={definition}>AMOUNT OF WORDS - </Text>
          <Text style={valueStyle}>{totalAmountOfWords}</Text>
        </View>
        {!totalAmountOfWords && (
          <Text style={alert}>Please select some tag with words.</Text>
        )}
        <View style={[wordsBlock]}>
          <Text style={definition}>FOR TRAINING - </Text>
          <TextInput
            style={inputStyle}
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
          <Text style={alert}>New amount of words is not correct.</Text>
        )}
        <Text style={[definition, { marginTop: 35, }]}>WORDS ORDER</Text>
        <View style={tagsBlock}>
          <TouchableButton
            style={[orderItem, !isRandom && activeTag]}
            onPress={isRandom ? this.handleRandom : () => {}}
          >
            <Text style={[textStyle, !isRandom && { color: '#ffffff', }]}>
              sequential
            </Text>
          </TouchableButton>
          <TouchableButton
            style={[orderItem, isRandom && activeTag]}
            onPress={!isRandom ? this.handleRandom : () => {}}
          >
            <Text style={[textStyle, isRandom && { color: '#ffffff', }]}>
              random
            </Text>
          </TouchableButton>
        </View>
        <TouchableButton style={editBtn} onPress={this.confirmSettings}>
          <Text style={editText}>CONFIRM</Text>
        </TouchableButton>
      </ScrollView>
    )
  }
}

export { SettingsScreen, }
