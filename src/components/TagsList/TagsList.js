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
    const { tagsList, toDetails, toEdit, } = this.props

    return (
      <TagCard
        name={item}
        isLastCard={index === tagsList.length - 1}
        toDetails={toDetails}
        toEdit={toEdit}
      />
    )
  }

  filterTagList = (list, searchString) => list.filter(
    elem => elem.toLowerCase().indexOf(searchString.toLowerCase()) > -1
  )

  updateSearchString = (text) => {
    this.setState({ searchString: text, clearInput: false, })
  }

  addTag = () => {
    const { addNewTag, } = this.props
    const { searchString, } = this.state

    addNewTag(searchString.replace(/^\s+/g, ''))
    this.setState({ clearInput: true, })
  }

  render() {
    const { tagsList, } = this.props
    const { searchString, clearInput, } = this.state
    const { container, addTagBlock, definition, valueStyle, } = styles

    return (
      <ScrollView>
        <SearchInput
          placeholder='Find tag...'
          clearInput={clearInput}
          onChange={this.updateSearchString}
        />
        {searchString && !this.filterTagList(tagsList, searchString).length ? (
          <TouchableButton style={addTagBlock} onPress={this.addTag}>
            <Text style={definition}>Add tag</Text>
            <Text style={valueStyle}>{`${searchString}`}</Text>
          </TouchableButton>
        ) : null}
        <FlatList
          data={
            !searchString
              ? tagsList
              : this.filterTagList(tagsList, searchString)
          }
          renderItem={this.renderItems}
          keyExtractor={uuidv4}
          style={container}
        />
      </ScrollView>
    )
  }
}

export { TagsList, }
