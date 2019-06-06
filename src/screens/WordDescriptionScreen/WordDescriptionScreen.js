import React, { Component, } from 'react'
import { ScrollView, Text, View, ActivityIndicator, } from 'react-native'
import FastImage from 'react-native-fast-image'
import uuidv4 from 'uuid/v4'
import { TouchableButton, Icon, PermissionPopup, } from '../../components'
import { getRandomColor, createLine, } from '../../utils'
import { EDIT_WORD_SCREEN, } from '../../constants'
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

    navigation.navigate(EDIT_WORD_SCREEN, { id: wordData.id, })
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

    if (!wordData) {
      return null
    }

    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.currentWord}>{wordData.word}</Text>
          <Text style={styles.transcript}>{`[${wordData.transcription}]`}</Text>
          <Text style={styles.definition}>TRANSLATION</Text>
          <Text style={styles.translationStyle}>
            {createLine(wordData.translation)}
          </Text>
          <View style={styles.imageContainer}>
            {loading && (
              <ActivityIndicator
                color='#E8453B'
                style={styles.indicator}
                size='large'
              />
            )}
            <FastImage
              style={styles.imageStyle}
              source={{
                uri: wordData.url,
                priority: FastImage.priority.high,
              }}
              onLoad={this.handleLoad}
            />
          </View>
          {!!wordData.examples.length && (
            <Text style={styles.definition}>EXAMPLES</Text>
          )}
          {wordData.examples && this.renderExamples(wordData.examples)}
          <Text style={[styles.definition, styles.tagName]}>
            TAG NAME:{' '}
            <Text style={styles.tagText}>{`  ${wordData.tagName}  `}</Text>
          </Text>
          <View style={styles.controlPanel}>
            <TouchableButton style={styles.btn} onPress={this.handlePermission}>
              <Icon name='trash-alt' size={26} color='white' />
            </TouchableButton>
            <TouchableButton style={styles.btn} onPress={this.toEditWordScreen}>
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
