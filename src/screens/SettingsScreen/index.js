// @flow

import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import type { Dispatch, } from 'redux'
import { SettingsScreen, } from './SettingsScreen'
import { setSettings, getSettingsList, } from '../../redux/actions'
import type { RootState, WordObjType, } from '../../flowAliases'

type SettingsContainerProps = {
  tagsList: ?Array<string>,
  wordsList: ?Array<WordObjType>,
  allTags: boolean,
  tagsForTask: Array<string>,
  amountOfWords: number,
  isRandom: boolean
}

const mapStateToProps = (state: RootState): SettingsContainerProps => ({
  tagsList: state.tagsState.tagsList,
  wordsList: state.wordsDataState.wordsList,
  allTags: state.tasksState.allTags,
  tagsForTask: state.tasksState.tagsForTask,
  amountOfWords: state.tasksState.amountOfWords,
  isRandom: state.tasksState.random,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    setSettings,
    getSettingsList,
  },
  dispatch
)

const mergeProps = (
  stateProps: SettingsContainerProps,
  dispatchProps,
  ownProps
) => {
  const { allTags, tagsList, tagsForTask, } = stateProps

  let newList: ?Array<string> = tagsForTask

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
