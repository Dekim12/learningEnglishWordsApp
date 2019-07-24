// @flow

import { connect, } from 'react-redux'
import { WordsScreen, } from './WordsScreen'
import type { WordObjType, RootState, } from '../../flowAliases'
import type { TasksState, } from '../../redux/reducers/tasksReducer'

type State = {
  tagsList: ?Array<string>,
  wordsList: ?Array<WordObjType>,
  settings: ?TasksState
}

const mapStateToProps = (state: RootState): State => ({
  tagsList: state.tagsState.tagsList,
  wordsList: state.wordsDataState.wordsList,
  settings: state.tasksState,
})

export const WordsScreenContainer = connect(mapStateToProps)(WordsScreen)
