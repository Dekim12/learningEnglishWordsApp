import React, { Component, } from 'react'
import { ScrollView, Text, View, Image, ActivityIndicator, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TouchableButton, Icon, } from '../../components'
import { getRandomColor, } from '../../utils'
import styles from './style'

class WordDescriptionScreen extends Component {
  state = { loading: true, }

  static navigationOptions = ({ navigation, }) => {
    const word = navigation.getParam('word').split('')
    word[0] = word[0].toUpperCase()

    return {
      title: word.join(''),
      headerTitleContainerStyle: {
        marginRight: 55,
      },
    }
  }

  keyExtractor = () => uuidv4().toString()

  renderExamples = list => list.map(item => (
    <View style={styles.exampleBlock} key={this.keyExtractor()}>
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

  render() {
    const { wordData, } = this.props
    const {
      container,
      definition,
      textValue,
      transcript,
      imageStyle,
      imageContainer,
      tagText,
      controlPanel,
      btn,
      indicator,
    } = styles

    if (!wordData) {
      return null
    }

    return (
      <ScrollView contentContainerStyle={container}>
        <Text style={definition}>
          WORD: <Text style={textValue}>{` ${wordData.word}`}</Text>
        </Text>
        <Text style={definition}>
          TRANSCRIPTION :
          <Text style={[textValue, transcript]}>
            {`  [${wordData.transcription}]`}
          </Text>
        </Text>
        <Text style={definition}>
          MAIN TRANSLATION:
          <Text style={textValue}>{` ${wordData.translation}`}</Text>
        </Text>
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
        {!!wordData.examples.length && (
          <Text style={[definition, { alignSelf: 'center', }]}>EXAMPLES</Text>
        )}
        {wordData.examples && this.renderExamples(wordData.examples)}
        <Text style={[definition, { marginTop: 20, }]}>
          TAG NAME: <Text style={tagText}>{`  ${wordData.tagName}  `}</Text>
        </Text>
        <View style={controlPanel}>
          <TouchableButton style={btn} onPress={this.deleteCurrentWord}>
            <Icon name='trash-alt' size={26} color='white' />
          </TouchableButton>
          <TouchableButton style={btn}>
            <Icon name='highlighter' size={26} color='white' />
          </TouchableButton>
        </View>
      </ScrollView>
    )
  }
}

export { WordDescriptionScreen, }
