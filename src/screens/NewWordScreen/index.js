// @flow

import { connect, } from 'react-redux'
import { bindActionCreators, type Dispatch, } from 'redux'
import { NewWordScreen, } from './NewWordScreen'
import { addNewWord, } from '../../redux/actions'
import type { RootState, } from '../../flowAliases'
import type { TagsState, } from '../../redux/reducers/tagsReducer'

type EditWordProps = TagsState

const mapStateToProps = (state: RootState): EditWordProps => ({
  tagsList: state.tagsState.tagsList,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addNewWord,
  },
  dispatch
)

export const NewWordScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewWordScreen)
