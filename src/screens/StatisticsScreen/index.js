// @flow

import { connect, } from 'react-redux'
import { StatisticsScreen, } from './StatisticsScreen'
import type { RootState, } from '../../flowAliases'
import type { Props, } from './StatisticsScreen'

const mapStateToProps = (state: RootState): Props => ({
  tagsCount: state.tagsState.tagsList.length,
  wordsCount: state.wordsDataState.wordsList.length,
  allAnswers: state.tasksState.allAnswers,
  rightAnswers: state.tasksState.rightAnswers,
})

export const StatisticsContainer = connect(mapStateToProps)(StatisticsScreen)
