// @flow

import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import type { Dispatch, } from 'redux'
import { TagsScreen, } from './TagsScreen'
import { addTag, } from '../../redux/actions'
import type { RootState, } from '../../flowAliases'
import type { TagsState, } from '../../redux/reducers/tagsReducer'

const mapStateToProps = (state: RootState): TagsState => ({
  tagsList: state.tagsState.tagsList,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addTag,
  },
  dispatch
)

export const TagsScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsScreen)
