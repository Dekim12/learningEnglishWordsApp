// @flow

import * as React from 'react'
import {
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import uuidv4 from 'uuid/v4'
import { TouchableButton, Icon, PermissionPopup, } from '../../components'
import { getRandomColor, createLine, } from '../../utils'
import { MOVEMENT_FUNC_NAMES, } from '../../constants'
import { deleteWord, } from '../../redux/actions'
import type { WordObj, } from '../../flowAliases'
import styles from './style'

type Props = {
  componentId: string,
  changeScreen: (functionName: string, ...args: Array<any>) => void,
  deleteWord: typeof deleteWord,
  wordData: WordObj
}

type State = {
  loading: boolean,
  permissionVisible: boolean
}

class WordDescriptionScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { loading: true, permissionVisible: false, }
  }

  renderExamples = (list: Array<string> | []): Array<React.Node> => list.map((item: string) => (
    <View style={styles.exampleBlock} key={uuidv4()}>
      <View
        style={[styles.exampleLabel, { backgroundColor: getRandomColor(), }]}
      />
      <Text style={styles.example}>{item}</Text>
    </View>
  ))

  handleLoad = (): void => {
    this.setState({ loading: false, })
  }

  deleteCurrentWord = (): void => {
    const { wordData, changeScreen, componentId, } = this.props

    this.props.deleteWord(wordData.id)
    changeScreen(MOVEMENT_FUNC_NAMES.back, componentId)
  }

  toEditWordScreen = (): void => {
    const { wordData, componentId, changeScreen, } = this.props

    changeScreen(MOVEMENT_FUNC_NAMES.editWord, componentId, wordData.id)
  }

  handlePermission = (): void => this.setState({
    permissionVisible: true,
  })

  refreshPermission = (): void => this.setState({
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
        <StatusBar hidden />
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
            TAG NAME:
            <Text style={styles.tagText}>{`  ${wordData.tagName}  `}</Text>
          </Text>
          <View style={styles.controlPanel}>
            <TouchableButton style={styles.btn} onPress={this.handlePermission}>
              <Icon name='trash-alt' size={26} />
            </TouchableButton>
            <TouchableButton style={styles.btn} onPress={this.toEditWordScreen}>
              <Icon name='highlighter' size={26} />
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
