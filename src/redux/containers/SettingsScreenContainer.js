import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { SettingsScreen, } from '../../screens'
import { setSettings, } from '../actions'

const mapStateToProps = state => ({
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

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { allTags, tagsList, tagsForTask, } = stateProps

  let newList = tagsForTask

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SettingsScreen)
