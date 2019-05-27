import React from 'react'
import { FlatList, ScrollView, Text, } from 'react-native'
import { WordCard, SearchInput, TouchableButton, } from '../index'
import createFuse from '../../utils/fuse'
import styles from './style'

class WordList extends React.Component {
  constructor(props) {
    super(props)
    const { wordsList, } = this.props

    this.state = { searchString: '', }

    this.fuse = createFuse(wordsList)
  }

  renderItems = ({ item, index, }) => {
    const { wordsList, openDescription, deleteWord, } = this.props

    return (
      <WordCard
        description={item}
        isLastCard={index === wordsList.length - 1}
        goToDetails={openDescription}
        deleteWord={deleteWord}
      />
    )
  }

  keyExtractor = ({ id, }) => id.toString()

  updateSearchString = (text) => {
    this.setState({ searchString: text, })
  }

  addWord = () => {
    const { addNewWord, } = this.props
    const { searchString, } = this.state

    addNewWord(searchString)
  }

  render() {
    const { wordsList, } = this.props
    const { searchString, } = this.state
    const { container, addWordBlock, definition, valueStyle, } = styles

    const filteredDataList = this.fuse.search(searchString)

    return (
      <ScrollView>
        <SearchInput
          placeholder='Find word...'
          onChange={this.updateSearchString}
        />
        {searchString && !filteredDataList.length ? (
          <TouchableButton style={addWordBlock} onPress={this.addWord}>
            <Text style={definition}>Add word</Text>
            <Text style={valueStyle}>{`${searchString}`}</Text>
          </TouchableButton>
        ) : null}
        <FlatList
          data={!searchString ? wordsList : filteredDataList}
          renderItem={this.renderItems}
          keyExtractor={this.keyExtractor}
          style={container}
        />
      </ScrollView>
    )
  }
}

export { WordList, }
