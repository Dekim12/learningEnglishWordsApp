import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { CurrentTaskScreen, } from './CurrentTaskScreen'
import { setAnswers, } from '../../redux/actions'
import { getNecessaryWords, } from '../../utils'

const mapStateToProps = state => ({
  wordsList: state.wordsDataState.wordsList,
  tagsList: state.tagsState.tagsList,
  tagsForTask: state.tasksState.tagsForTask,
  amountOfWords: state.tasksState.amountOfWords,
  random: state.tasksState.random,
  allTags: state.tasksState.allTags,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    setAnswers,
  },
  dispatch
)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    tagsForTask,
    wordsList,
    amountOfWords,
    random,
    tagsList,
    allTags,
  } = stateProps

  const { goBack, componentId, } = ownProps

  const necessaryTags = allTags ? tagsList : tagsForTask
  const wordsForLearning = wordsList.filter(
    word => necessaryTags.indexOf(word.tagName) >= 0
  )

  const goToTasks = (allAnswers, rightAnswers) => {
    dispatchProps.setAnswers(allAnswers, rightAnswers)
    goBack(componentId)
  }

  return {
    wordsForTask: getNecessaryWords(+amountOfWords, wordsForLearning, random),
    wordsList,
    goToTasks,
    ...dispatchProps,
    ...ownProps,
  }
}

export const CurrentTaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CurrentTaskScreen)
