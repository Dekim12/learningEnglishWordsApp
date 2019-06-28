// @flow

import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import type { Dispatch, } from 'redux'
import { find, } from 'lodash'
import { WordDescriptionScreen, } from './WordDescriptionScreen'
import { deleteWord, } from '../../redux/actions'
import type { RootState, WordObjType, } from '../../flowAliases'
import type { WordsState, } from '../../redux/reducers/wordsReducer'

const mapStateToProps = (state: RootState): WordsState => ({
  wordsList: state.wordsDataState.wordsList,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteWord,
  },
  dispatch
)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { wordsList, } = stateProps
  const { id, } = ownProps

  const wordData: WordObjType = find(
    wordsList,
    currentWord => currentWord.id === id
  )

  return { wordData, ...dispatchProps, ...ownProps, }
}

export const WordDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(WordDescriptionScreen)
