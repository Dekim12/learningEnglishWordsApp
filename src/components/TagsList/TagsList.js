// @flow

import * as React from 'react'
import { FlatList, ScrollView, Text, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TagCard, SearchInput, TouchableButton, } from '../index'
import styles from './style'

type Props = {
  toEdit: (tagName: string) => void,
  toDetails: (tagName: string) => void,
  addNewTag: (newTagName: string) => void,
  tagsList: Array<string>
}

type State = {
  searchString: string,
  clearInput: boolean
}

class TagsList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { searchString: '', clearInput: false, }
  }

  renderItems = ({
    item,
    index,
  }: {
    item: string,
    index: number
  }): React.Node => {
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

  keyExtractor = (): string => uuidv4()

  filterTagList = (list: Array<string>, searchString: string): Array<string> => list.filter(
    (elem: string) => elem.toLowerCase().indexOf(searchString.toLowerCase()) > -1
  )

  updateSearchString = (text: string): void => {
    this.setState({ searchString: text, clearInput: false, })
  }

  addTag = (): void => {
    const { addNewTag, } = this.props
    const { searchString, } = this.state

    addNewTag(searchString.replace(/^\s+|\s+$/g, ''))
    this.setState({ clearInput: true, })
  }

  render() {
    const { tagsList, } = this.props
    const { searchString, clearInput, } = this.state

    const filteredTags: Array<string> = this.filterTagList(
      tagsList,
      searchString
    )

    return (
      <ScrollView>
        <SearchInput
          placeholder='Find tag...'
          clearInput={clearInput}
          onChange={this.updateSearchString}
        />
        {searchString && !filteredTags.length ? (
          <TouchableButton style={styles.addTagBlock} onPress={this.addTag}>
            <Text style={styles.definition}>Add tag</Text>
            <Text style={styles.valueStyle}>{`${searchString}`}</Text>
          </TouchableButton>
        ) : null}
        <FlatList
          data={!searchString ? tagsList : filteredTags}
          renderItem={this.renderItems}
          keyExtractor={this.keyExtractor}
          style={styles.container}
        />
      </ScrollView>
    )
  }
}

export { TagsList, }
