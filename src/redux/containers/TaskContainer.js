import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { CurrentTaskScreen, } from '../../screens'
import { setAnswers, } from '../actions'
import { getNecessaryWords, } from '../../utils'
import { ROOT_TASKS_SCREEN, } from '../../constants'

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
  const { navigation, } = ownProps

  const taskName = navigation.getParam('taskName')
  const necessaryTags = allTags ? tagsList : tagsForTask
  const wordsForLearning = wordsList.filter(
    word => necessaryTags.indexOf(word.tagName) >= 0
  )

  const goToTasks = (allAnswers, rightAnswers) => {
    dispatchProps.setAnswers(allAnswers, rightAnswers)
    navigation.navigate(ROOT_TASKS_SCREEN)
  }

  return {
    wordsForTask: getNecessaryWords(+amountOfWords, wordsForLearning, random),
    taskName,
    wordsList,
    goToTasks,
    ...dispatchProps,
    ...ownProps,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CurrentTaskScreen)
