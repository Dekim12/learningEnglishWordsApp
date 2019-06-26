// @flow

import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { find, } from 'lodash'
import { EditWordScreen, } from './EditWordScreen'
import { editWord, } from '../../redux/actions'
import type {
  WordObj,
  WordState,
  TagsState,
  RootState,
} from '../../flowAliases'

type State = WordState & TagsState

const mapStateToProps = (state: RootState): State => ({
  wordsList: state.wordsDataState.wordsList,
  tagsList: state.tagsState.tagsList,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    editWord,
  },
  dispatch
)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { wordsList, tagsList, } = stateProps
  const { id, } = ownProps

  const wordData: WordObj = find(wordsList, word => word.id === id)

  return { wordData, tagsList, ...dispatchProps, ...ownProps, }
}

export const EditWordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(EditWordScreen)
