// @flow

import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { SettingsScreen, } from './SettingsScreen'
import { setSettings, } from '../../redux/actions'
import type { RootState, WordObj, } from '../../flowAliases'

type StateProps = {
  tagsList: Array<string> | [],
  wordsList: Array<WordObj> | [],
  allTags: boolean,
  tagsForTask: Array<string> | [],
  amountOfWords: number,
  isRandom: boolean
}

const mapStateToProps = (state: RootState): StateProps => ({
  tagsList: state.tagsState.tagsList,
  wordsList: state.wordsDataState.wordsList,
  allTags: state.tasksState.allTags,
  tagsForTask: state.tasksState.tagsForTask,
  amountOfWords: state.tasksState.amountOfWords,
  isRandom: state.tasksState.random,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    setSettings,
  },
  dispatch
)

const mergeProps = (stateProps: StateProps, dispatchProps, ownProps) => {
  const { allTags, tagsList, tagsForTask, } = stateProps

  let newList: Array<string> | [] = tagsForTask

  if (allTags) {
    newList = tagsList
  }

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    tagsForTask: newList,
  }
}

export const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SettingsScreen)
