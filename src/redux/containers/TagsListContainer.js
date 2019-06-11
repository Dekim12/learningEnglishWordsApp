import { connect, } from 'react-redux'
import { TagsList, } from '../../components'

const mapStateToProps = state => ({
  tagsList: state.tagsState.tagsList,
})

export const TagsListContainer = connect(mapStateToProps)(TagsList)
