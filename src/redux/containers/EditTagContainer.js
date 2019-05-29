import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { EditTagScreen, } from '../../screens'
import { editTag, editWordsList, } from '../actions'

const mapStateToProps = state => ({
  wordsList: state.wordsDataState.wordsList,
  tagsList: state.tagsState.tagsList,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    editTag,
    editWordsList,
  },
  dispatch
)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { wordsList, tagsList, } = stateProps
  const { navigation, } = ownProps

  const tagName = navigation.getParam('tagName')
  const tagWords = wordsList.filter(word => word.tagName === tagName)

  const editCurrentTag = (prevName, newName, deletedWordList) => {
    dispatchProps.editTag(prevName, newName)
    if (tagWords.length) {
      dispatchProps.editWordsList(prevName, newName, deletedWordList)
    }
  }

  return {
    tagsList,
    tagName,
    tagWords,
    editCurrentTag,
    ...ownProps,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(EditTagScreen)
