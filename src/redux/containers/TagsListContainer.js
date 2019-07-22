// @flow

import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import type { Dispatch, } from 'redux'
import { TagsList, } from '../../components'
import { getTagsList, } from '../actions'
import type { RootState, } from '../../flowAliases'
import type { TagsState, } from '../reducers/tagsReducer'

const mapStateToProps = (state: RootState): TagsState => ({
  tagsList: state.tagsState.tagsList,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getTagsList,
  },
  dispatch
)

export const TagsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsList)
