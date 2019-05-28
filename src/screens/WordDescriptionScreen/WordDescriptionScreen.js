import React, { Component, } from 'react'
import { ScrollView, Text, View, Image, ActivityIndicator, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TouchableButton, Icon, } from '../../components'
import { getRandomColor, createLine, } from '../../utils'
import styles from './style'

class WordDescriptionScreen extends Component {
  state = { loading: true, }

  static navigationOptions = ({ navigation, }) => {
    const word = navigation.getParam('word').split('')
    word[0] = word[0].toUpperCase()

    return {
      title: word.join(''),
      headerTitleContainerStyle: {
        marginRight: 50,
      },
    }
  }

  renderExamples = list => list.map(item => (
    <View style={styles.exampleBlock} key={uuidv4()}>
      <View
        style={[styles.exampleLabel, { backgroundColor: getRandomColor(), }]}
      />
      <Text style={styles.example}>{item}</Text>
    </View>
  ))

  handleLoad = () => {
    this.setState({ loading: false, })
  }

  deleteCurrentWord = () => {
    const { deleteWord, wordData, navigation, } = this.props

    navigation.goBack()
    deleteWord(wordData.id)
  }

  toEditWordScreen = () => {
    const { wordData, navigation, } = this.props

    navigation.navigate('EditWord', { id: wordData.id, })
  }

  render() {
    const { wordData, } = this.props
    const {
      container,
      definition,
      translationStyle,
      transcript,
      imageStyle,
      imageContainer,
      tagText,
      controlPanel,
      btn,
      indicator,
      currentWord,
    } = styles

    if (!wordData) {
      return null
    }

    return (
      <ScrollView contentContainerStyle={container}>
        <Text style={currentWord}>{wordData.word}</Text>
        {/* <Text style={definition}>TRANSCRIPTION</Text> */}
        <Text style={transcript}>{`[${wordData.transcription}]`}</Text>
        <Text style={definition}>TRANSLATION</Text>
        <Text style={translationStyle}>{createLine(wordData.translation)}</Text>
        <View style={imageContainer}>
          {this.state.loading && (
            <ActivityIndicator color='#E8453B' style={indicator} size='large' />
          )}
          <Image
            style={imageStyle}
            source={{ uri: wordData.url, }}
            onLoad={this.handleLoad}
          />
        </View>
        {!!wordData.examples.length && <Text style={definition}>EXAMPLES</Text>}
        {wordData.examples && this.renderExamples(wordData.examples)}
        <Text style={[definition, { marginTop: 20, alignSelf: 'flex-start', }]}>
          TAG NAME: <Text style={tagText}>{`  ${wordData.tagName}  `}</Text>
        </Text>
        <View style={controlPanel}>
          <TouchableButton style={btn} onPress={this.deleteCurrentWord}>
            <Icon name='trash-alt' size={26} color='white' />
          </TouchableButton>
          <TouchableButton style={btn} onPress={this.toEditWordScreen}>
            <Icon name='highlighter' size={26} color='white' />
          </TouchableButton>
        </View>
      </ScrollView>
    )
  }
}

export { WordDescriptionScreen, }
