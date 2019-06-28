// @flow

import { connect, } from 'react-redux'
import { TagsList, } from '../../components'
import type { RootState, } from '../../flowAliases'
import type { TagsState, } from '../reducers/tagsReducer'

const mapStateToProps = (state: RootState): TagsState => ({
  tagsList: state.tagsState.tagsList,
})

export const TagsListContainer = connect(mapStateToProps)(TagsList)
