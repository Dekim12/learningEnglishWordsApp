import React, { Component, } from 'react'
import { ScrollView, Text, View, Image, ActivityIndicator, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TouchableButton, Icon, PermissionPopup, } from '../../components'
import { getRandomColor, createLine, } from '../../utils'
import styles from './style'

class WordDescriptionScreen extends Component {
  state = { loading: true, permissionVisible: false, }

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

  handlePermission = () => this.setState({
    permissionVisible: true,
  })

  refreshPermission = () => this.setState({
    permissionVisible: false,
  })

  render() {
    const { wordData, } = this.props
    const { loading, permissionVisible, } = this.state
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
      <View>
        <ScrollView contentContainerStyle={container}>
          <Text style={currentWord}>{wordData.word}</Text>
          <Text style={transcript}>{`[${wordData.transcription}]`}</Text>
          <Text style={definition}>TRANSLATION</Text>
          <Text style={translationStyle}>
            {createLine(wordData.translation)}
          </Text>
          <View style={imageContainer}>
            {loading && (
              <ActivityIndicator
                color='#E8453B'
                style={indicator}
                size='large'
              />
            )}
            <Image
              style={imageStyle}
              source={{ uri: wordData.url, }}
              onLoad={this.handleLoad}
            />
          </View>
          {!!wordData.examples.length && (
            <Text style={definition}>EXAMPLES</Text>
          )}
          {wordData.examples && this.renderExamples(wordData.examples)}
          <Text
            style={[definition, { marginTop: 20, alignSelf: 'flex-start', }]}
          >
            TAG NAME: <Text style={tagText}>{`  ${wordData.tagName}  `}</Text>
          </Text>
          <View style={controlPanel}>
            <TouchableButton style={btn} onPress={this.handlePermission}>
              <Icon name='trash-alt' size={26} color='white' />
            </TouchableButton>
            <TouchableButton style={btn} onPress={this.toEditWordScreen}>
              <Icon name='highlighter' size={26} color='white' />
            </TouchableButton>
          </View>
        </ScrollView>
        {permissionVisible && (
          <PermissionPopup
            resolve={this.deleteCurrentWord}
            refresh={this.refreshPermission}
            isWord
          />
        )}
      </View>
    )
  }
}

export { WordDescriptionScreen, }
