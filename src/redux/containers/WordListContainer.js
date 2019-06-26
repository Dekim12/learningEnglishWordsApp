// @flow

import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { WordList, } from '../../components/WordsList/WordsList'
import { deleteWord, } from '../actions'
import type { RootState, WordState, } from '../../flowAliases'

const mapStateToProps = (state: RootState): WordState => ({
  wordsList: state.wordsDataState.wordsList,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    deleteWord,
  },
  dispatch
)

export const WordListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WordList)
