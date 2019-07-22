// @flow

import React, { Component, } from 'react'
import type { Node, } from 'react'
import {
  FlatList,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from 'react-native'
import uuidv4 from 'uuid/v4'
import { WordCard, SearchInput, TouchableButton, } from '../index'
import createFuse from '../../utils/fuse'
import type { WordObjType, } from '../../flowAliases'
import { deleteWord, getWordsList, } from '../../redux/actions'
import styles from './style'

type Props = {
  wordsList: Array<WordObjType>,
  openDescription: (id: number, word: string) => void,
  setPermission: (resolve: () => void) => void,
  addNewWord: (word: string) => void,
  deleteWord: typeof deleteWord,
  getWordsList: typeof getWordsList
}

type State = {
  searchString: string
}

class WordList extends Component<Props, State> {
  fuse: { options: mixed, list: Array<WordObjType>, ...any }

  constructor(props: Props) {
    super(props)

    this.state = { searchString: '', }
  }

  componentDidMount = () => {
    this.props.getWordsList()
  }

  renderItems = ({
    item,
    index,
  }: {
    item: WordObjType,
    index: number
  }): Node => {
    const { openDescription, setPermission, } = this.props

    const deleteCurrentWord = (): void => {
      const resolve = (): void => this.props.deleteWord(item.id)
      setPermission(resolve)
    }

    return (
      <WordCard
        description={item}
        isFirstCard={index === 0}
        goToDetails={openDescription}
        deleteWord={deleteCurrentWord}
      />
    )
  }

  keyExtractor = (): string => uuidv4()

  updateSearchString = (text: string): void => {
    this.setState({ searchString: text, })
  }

  addWord = (): void => {
    const { addNewWord, } = this.props
    const { searchString, } = this.state

    addNewWord(searchString)
  }

  render() {
    const { wordsList, } = this.props
    const { searchString, } = this.state

    if (!wordsList) {
      return (
        <View style={styles.loadingBlock}>
          <ActivityIndicator size='large' color='#2d862d' />
        </View>
      )
    }

    const fuse = createFuse(wordsList)
    const filteredDataList: Array<WordObjType> = fuse.search(searchString)

    return (
      <ScrollView>
        <SearchInput
          placeholder='Find word...'
          onChange={this.updateSearchString}
        />
        {searchString && !filteredDataList.length ? (
          <TouchableButton style={styles.addWordBlock} onPress={this.addWord}>
            <Text style={styles.definition}>Add word</Text>
            <Text style={styles.valueStyle}>{`${searchString}`}</Text>
          </TouchableButton>
        ) : null}
        <FlatList
          data={!searchString ? wordsList : filteredDataList}
          renderItem={this.renderItems}
          keyExtractor={this.keyExtractor}
          style={styles.container}
        />
      </ScrollView>
    )
  }
}

export { WordList, }
