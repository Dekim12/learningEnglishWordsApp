import React, { Component, } from 'react'
import { ScrollView, Text, View, Image, FlatList, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { getRandomColor, } from '../../utils'
import styles from './style'

class WordDescriptionScreen extends Component {
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

  selectWordInExample = (example) => {
    const {
      wordData: { word, },
    } = this.props

    const { selectedWord, } = styles

    const examplePieces = `  ${example}  `.split(` ${word} `)
    console.log(examplePieces)

    const newExample = []

    examplePieces.forEach((elem, index) => {
      if (index === 0) {
        newExample.push(<Text key={this.keyExtractor()}>{elem.slice(2)}</Text>)
        newExample.push(
          <Text key={this.keyExtractor()} style={selectedWord}>
            {` ${word} `}
          </Text>
        )
      } else if (index === examplePieces.length - 1) {
        newExample.push(
          <Text key={this.keyExtractor()}>{elem.slice(0, -2)}</Text>
        )
      } else {
        newExample.push(<Text key={this.keyExtractor()}>{elem}</Text>)
        newExample.push(
          <Text key={this.keyExtractor()} style={selectedWord}>
            {` ${word} `}
          </Text>
        )
      }
    })

    return newExample
  }

  renderExamples = ({ item, }) => (
    <View style={styles.exampleBlock}>
      <View
        style={[styles.exampleLabel, { backgroundColor: getRandomColor(), }]}
      />
      <Text style={styles.example}>{this.selectWordInExample(item)}</Text>
    </View>
  )

  render() {
    const {
      wordData: { word, transcription, translation, url, examples, tagName, },
    } = this.props
    const { container, definition, textValue, transcript, imageStyle, } = styles

    return (
      <ScrollView contentContainerStyle={container}>
        <Text style={definition}>
          WORD: <Text style={textValue}>{` ${word}`}</Text>
        </Text>
        <Text style={definition}>
          TRANSCRIPTION :
          <Text style={[textValue, transcript]}>{`  [${transcription}]`}</Text>
        </Text>
        <Text style={definition}>
          MAIN TRANSLATION: <Text style={textValue}>{` ${translation}`}</Text>
        </Text>
        <Image source={{ uri: url, }} style={imageStyle} />
        <Text style={[definition, { alignSelf: 'center', }]}>EXAMPLES</Text>
        <FlatList
          data={examples}
          renderItem={this.renderExamples}
          keyExtractor={this.keyExtractor}
        />
      </ScrollView>
    )
  }
}

export { WordDescriptionScreen, }
