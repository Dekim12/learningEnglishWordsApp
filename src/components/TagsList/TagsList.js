import React from 'react'
import { FlatList, ScrollView, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TagCard, SearchInput, } from '../index'
import styles from './style'

class TagsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { searchString: '', }
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

  render() {
    const { tagsList, } = this.props
    const { container, } = styles

    return (
      <ScrollView>
        <SearchInput placeholder='Find tag...' />
        <FlatList
          data={tagsList}
          renderItem={this.renderItems}
          keyExtractor={uuidv4}
          style={container}
        />
      </ScrollView>
    )
  }
}

export { TagsList, }
