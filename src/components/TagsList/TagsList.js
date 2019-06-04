import React from 'react'
import { FlatList, ScrollView, Text, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TagCard, SearchInput, TouchableButton, } from '../index'
import styles from './style'

class TagsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { searchString: '', clearInput: false, }
  }

  renderItems = ({ item, index, }) => {
    const { toDetails, toEdit, } = this.props

    return (
      <TagCard
        name={item}
        isFirstCard={index === 0}
        toDetails={toDetails}
        toEdit={toEdit}
      />
    )
  }

  keyExtractor = () => uuidv4()

  filterTagList = (list, searchString) => list.filter(
    elem => elem.toLowerCase().indexOf(searchString.toLowerCase()) > -1
  )

  updateSearchString = (text) => {
    this.setState({ searchString: text, clearInput: false, })
  }

  addTag = () => {
    const { addNewTag, } = this.props
    const { searchString, } = this.state

    addNewTag(searchString.replace(/^\s+|\s+$/g, ''))
    this.setState({ clearInput: true, })
  }

  render() {
    const { tagsList, } = this.props
    const { searchString, clearInput, } = this.state
    const { container, addTagBlock, definition, valueStyle, } = styles

    const filteredTags = this.filterTagList(tagsList, searchString)

    return (
      <ScrollView>
        <SearchInput
          placeholder='Find tag...'
          clearInput={clearInput}
          onChange={this.updateSearchString}
        />
        {searchString && !filteredTags.length ? (
          <TouchableButton style={addTagBlock} onPress={this.addTag}>
            <Text style={definition}>Add tag</Text>
            <Text style={valueStyle}>{`${searchString}`}</Text>
          </TouchableButton>
        ) : null}
        <FlatList
          data={!searchString ? tagsList : filteredTags}
          renderItem={this.renderItems}
          keyExtractor={this.keyExtractor}
          style={container}
        />
      </ScrollView>
    )
  }
}

export { TagsList, }
