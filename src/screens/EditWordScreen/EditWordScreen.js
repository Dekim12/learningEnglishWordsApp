import React, { Component, } from 'react'
import { ScrollView, Text, View, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TouchableButton, Icon, Input, } from '../../components'
import styles from './style'

class EditWordScreen extends Component {
  state = { ...this.props.wordData, }

  static navigationOptions = {
    title: 'Edit Word',
    headerTitleContainerStyle: {
      marginRight: 50,
    },
  }

  generateTranslation = translationList => translationList.map(word => (
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
      <TouchableButton style={{ marginLeft: 12, marginTop: 3, }}>
        <Icon name='times-circle' size={22} color='#ffb380' />
      </TouchableButton>
    </View>
  ))

  generateExamples = examples => examples.map(item => (
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
      <TouchableButton style={styles.exampleButton}>
        <Icon name='times-circle' size={22} color='#ffb380' />
      </TouchableButton>
    </View>
  ))

  generateTags = (currentTag, tagsList) => {
    const currentTagIndex = tagsList.findIndex(item => item === currentTag)

    return tagsList.map((tag, index) => (
      <TouchableButton
        style={[
          styles.tagItem,
          index === currentTagIndex ? { backgroundColor: '#2d862d', } : {}
        ]}
        key={uuidv4()}
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
    ))
  }

  render() {
    const { editWord, tagsList, } = this.props
    const { word, transcription, translation, tagName, examples, } = this.state

    const {
      container,
      definition,
      currentWord,
      wordTranscription,
      underLine,
      translationBlock,
      inputBlock,
      inputBtn,
      textInput,
      examplesBlock,
      editBtn,
      editText,
    } = styles

    return (
      <ScrollView contentContainerStyle={container}>
        <Text style={currentWord}>{word}</Text>
        <Text style={wordTranscription}>{`[${transcription}]`}</Text>
        <View style={underLine} />
        <Text style={definition}>TRANSLATION:</Text>
        <View style={translationBlock}>
          {this.generateTranslation(translation)}
        </View>
        <View style={inputBlock}>
          <Input
            placeholder='Add translation...'
            style={textInput}
            onSubmit={() => {}}
          />
          <TouchableButton style={inputBtn}>
            <Icon name='plus-circle' size={33} color='white' />
          </TouchableButton>
        </View>
        <Text style={definition}>NEW IMAGE:</Text>
        <View style={inputBlock}>
          <Input placeholder='Url...' style={textInput} onSubmit={() => {}} />
          <TouchableButton style={inputBtn}>
            <Icon name='plus-circle' size={35} color='white' />
          </TouchableButton>
        </View>
        <Text style={definition}>EXAMPLES:</Text>
        <View style={examplesBlock}>{this.generateExamples(examples)}</View>
        <View style={inputBlock}>
          <Input
            placeholder='Add example...'
            style={textInput}
            onSubmit={() => {}}
          />
          <TouchableButton style={inputBtn}>
            <Icon name='plus-circle' size={35} color='white' />
          </TouchableButton>
        </View>
        <Text style={definition}>TAGS:</Text>
        <View style={[translationBlock, { marginBottom: 20, }]}>
          {this.generateTags(tagName, tagsList)}
        </View>
        <TouchableButton style={editBtn}>
          <Text style={editText}>EDIT</Text>
        </TouchableButton>
      </ScrollView>
    )
  }
}

export { EditWordScreen, }
