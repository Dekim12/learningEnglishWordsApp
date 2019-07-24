// @flow

import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import type { Dispatch, } from 'redux'
import { WordList, } from '../../components/WordsList/WordsList'
import { deleteWord, getWordsList, } from '../actions'
import type { RootState, } from '../../flowAliases'
import type { WordsState, } from '../reducers/wordsReducer'

const mapStateToProps = (state: RootState): WordsState => ({
  wordsList: state.wordsDataState.wordsList,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteWord,
    getWordsList,
  },
  dispatch
)

export const WordListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WordList)
