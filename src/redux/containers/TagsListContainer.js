// @flow

import { connect, } from 'react-redux'
import { TagsList, } from '../../components'
import type { RootState, TagsState, } from '../../flowAliases'

const mapStateToProps = (state: RootState): TagsState => ({
  tagsList: state.tagsState.tagsList,
})

export const TagsListContainer = connect(mapStateToProps)(TagsList)
