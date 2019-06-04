import { connect, } from 'react-redux'
import { StatisticsScreen, } from '../../screens'

const mapStateToProps = state => ({
  tagsList: state.tagsState.tagsList,
  wordsList: state.wordsDataState.wordsList,
  allAnswers: state.tasksState.allAnswers,
  rightAnswers: state.tasksState.rightAnswers,
})

export default connect(mapStateToProps)(StatisticsScreen)
