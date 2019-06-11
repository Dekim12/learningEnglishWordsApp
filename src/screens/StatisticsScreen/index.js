import { connect, } from 'react-redux'
import { StatisticsScreen, } from './StatisticsScreen'

const mapStateToProps = state => ({
  tagsList: state.tagsState.tagsList,
  wordsList: state.wordsDataState.wordsList,
  allAnswers: state.tasksState.allAnswers,
  rightAnswers: state.tasksState.rightAnswers,
})

export const StatisticsContainer = connect(mapStateToProps)(StatisticsScreen)
