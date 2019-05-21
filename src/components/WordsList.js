import React from 'react'
import { StyleSheet, FlatList, } from 'react-native'
import { WordCard, } from './index'
import { screenSize, } from '../utils'

class WordList extends React.Component {
  renderItems = ({ item, index, }) => {
    const { data, openDescription, } = this.props

    return (
      <WordCard
        description={item}
        isLastCard={index === data.length - 1}
        goToDetails={openDescription}
      />
    )
  }

  _keyExtractor = ({ id, }) => id.toString()

  render() {
    const { data, } = this.props
    const { container, } = styles

    return (
      <FlatList
        data={data}
        renderItem={this.renderItems}
        keyExtractor={this._keyExtractor}
        style={container}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: screenSize.width,
  },
})

export { WordList, }
