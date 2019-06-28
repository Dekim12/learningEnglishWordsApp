// @flow

import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import type { Dispatch, } from 'redux'
import { find, } from 'lodash'
import { EditWordScreen, } from './EditWordScreen'
import { editWord, } from '../../redux/actions'
import type {
  WordObjType,
  WordState,
  TagsState,
  RootState,
} from '../../flowAliases'

type EditWordProps = WordState & TagsState

const mapStateToProps = (state: RootState): EditWordProps => ({
  wordsList: state.wordsDataState.wordsList,
  tagsList: state.tagsState.tagsList,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    editWord,
  },
  dispatch
)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { wordsList, tagsList, } = stateProps
  const { id, } = ownProps

  const wordData: WordObjType = find(wordsList, word => word.id === id)

  return { wordData, tagsList, ...dispatchProps, ...ownProps, }
}

export const EditWordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(EditWordScreen)
