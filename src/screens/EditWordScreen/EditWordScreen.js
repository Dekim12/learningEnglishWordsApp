import React, { Component, } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TouchableButton, Icon, Input, } from '../../components'
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
        <Text
          style={{
            fontFamily: 'OpenSans',
            color: 'white',
            fontSize: 18,
          }}
        >
          {item}
        </Text>
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
            index === currentTagIndex ? { backgroundColor: '#2d862d', } : {}
          ]}
          key={uuidv4()}
          onPress={addTag}
        >
          <Text
            style={[
              {
                fontFamily: 'OpenSans',
                color: '#484848',
                fontSize: 16,
              },
              index === currentTagIndex ? { color: 'white', } : {}
            ]}
          >
            {tag}
          </Text>
        </TouchableButton>
      )
    })
  }

  edit = () => {
    const { editWord, navigation, } = this.props
    const newWord = { ...this.state, }
    delete newWord.submit

    editWord(newWord)
    navigation.navigate('WordDetails', { id: newWord.id, word: newWord.word, })
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

    const {
      container,
      definition,
      currentWord,
      wordTranscription,
      translationBlock,
      inputBlock,
      inputBtn,
      textInput,
      examplesBlock,
      editBtn,
      editText,
    } = styles

    return (
      <KeyboardAvoidingView behavior='padding'>
        <ScrollView contentContainerStyle={container}>
          <Text style={currentWord}>{word}</Text>
          <Text style={wordTranscription}>{`[${transcription}]`}</Text>
          <Text style={definition}>TRANSLATION:</Text>
          <View style={translationBlock}>
            {this.generateTranslation(translation)}
          </View>
          <View style={inputBlock}>
            <Input
              placeholder='Add translation...'
              style={textInput}
              submit={submit}
              type={WORD}
              onSubmit={this.addWordOrExample}
            />
            <TouchableButton
              style={inputBtn}
              onPress={() => this.setState({ submit: true, })}
            >
              <Icon name='plus-circle' size={33} color='white' />
            </TouchableButton>
          </View>
          <Text style={definition}>NEW IMAGE:</Text>
          <View style={inputBlock}>
            <Input
              placeholder='Url...'
              style={textInput}
              submit={submit}
              type={URL}
              onSubmit={this.addTagOrUrl}
            />
            <TouchableButton
              style={inputBtn}
              onPress={() => this.setState({ submit: true, })}
            >
              <Icon name='plus-circle' size={35} color='white' />
            </TouchableButton>
          </View>
          <Text style={definition}>EXAMPLES:</Text>
          <View style={examplesBlock}>{this.generateExamples(examples)}</View>
          <View style={inputBlock}>
            <Input
              placeholder='Add example...'
              style={textInput}
              submit={submit}
              type={STRING}
              onSubmit={this.addWordOrExample}
            />
            <TouchableButton
              style={inputBtn}
              onPress={() => this.setState({ submit: true, })}
            >
              <Icon name='plus-circle' size={35} color='white' />
            </TouchableButton>
          </View>
          <Text style={definition}>TAGS:</Text>
          <View style={[translationBlock, { marginBottom: 20, }]}>
            {this.generateTags(tagName, tagsList)}
          </View>
          <TouchableButton style={editBtn} onPress={this.edit}>
            <Text style={editText}>EDIT</Text>
          </TouchableButton>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export { EditWordScreen, }
