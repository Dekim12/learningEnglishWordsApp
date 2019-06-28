// @flow

import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import type { Dispatch, } from 'redux'
import { TagDetailsScreen, } from './TagDetailsScreen'
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
  const { tagName, } = ownProps

  const tagsWordsList: Array<WordObjType> = wordsList.filter(
    (word: WordObjType) => word.tagName === tagName
  )

  return { ...dispatchProps, ...ownProps, tagsWordsList, tagName, }
}

export const TagDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TagDetailsScreen)
