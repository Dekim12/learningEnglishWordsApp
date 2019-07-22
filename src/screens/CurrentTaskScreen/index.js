// @flow

import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import type { Dispatch, } from 'redux'
import { CurrentTaskScreen, } from './CurrentTaskScreen'
import { setAnswers, } from '../../redux/actions'
import { MOVEMENT_FUNC_NAMES, } from '../../constants'
import { getNecessaryWords, } from '../../utils'
import type { RootState, WordObjType, } from '../../flowAliases'

type CurrentTaskProps = {
  wordsList: ?Array<WordObjType>,
  tagsList: ?Array<string>,
  tagsForTask: Array<string>,
  amountOfWords: number,
  random: boolean,
  allTags: boolean
}

const mapStateToProps = (state: RootState): CurrentTaskProps => ({
  wordsList: state.wordsDataState.wordsList,
  tagsList: state.tagsState.tagsList,
  tagsForTask: state.tasksState.tagsForTask,
  amountOfWords: state.tasksState.amountOfWords,
  random: state.tasksState.random,
  allTags: state.tasksState.allTags,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
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

  const { changeScreen, componentId, } = ownProps

  const necessaryTags: Array<string> = allTags ? tagsList : tagsForTask
  const wordsForLearning: Array<WordObjType> = wordsList.filter(
    (word: WordObjType) => necessaryTags.indexOf(word.tagName) >= 0
  )

  const goToTasks = (allAnswers: number, rightAnswers: number): void => {
    dispatchProps.setAnswers(allAnswers, rightAnswers)
    changeScreen(MOVEMENT_FUNC_NAMES.back, componentId)
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
