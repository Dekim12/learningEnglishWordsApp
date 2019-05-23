import React from 'react'
import { FlatList, } from 'react-native'
import { WordCard, } from '../index'
import styles from './style'

class WordList extends React.Component {
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
    const { wordsList, } = this.props
    const { container, } = styles

    return (
      <FlatList
        data={wordsList}
        renderItem={this.renderItems}
        keyExtractor={this._keyExtractor}
        style={container}
      />
    )
  }
}

export { WordList, }
