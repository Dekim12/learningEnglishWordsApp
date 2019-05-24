import React from 'react'
import { FlatList, ScrollView, } from 'react-native'
import { WordCard, SearchInput, } from '../index'
// import createFuse from '../../utils/fuse'
import styles from './style'

class WordList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dataList: this.props.wordsList, }
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

  _keyExtractor = ({ id, }) => id.toString()

  render() {
    const { dataList, } = this.state
    const { container, } = styles

    // console.log(this.fuse)

    return (
      <ScrollView>
        <SearchInput placeholder='Find word...' />
        <FlatList
          data={dataList}
          renderItem={this.renderItems}
          keyExtractor={this._keyExtractor}
          style={container}
        />
      </ScrollView>
    )
  }
}

export { WordList, }
