import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { EditTagScreen, } from './EditTagScreen'
import {
  editTag,
  editWordsList,
  deleteWordList,
  deleteTag,
} from '../../redux/actions'

const mapStateToProps = state => ({
  wordsList: state.wordsDataState.wordsList,
  tagsList: state.tagsState.tagsList,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    editTag,
    editWordsList,
    deleteWordList,
    deleteTag,
  },
  dispatch
)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { wordsList, tagsList, } = stateProps
  const { tagName, } = ownProps

  const tagWords = wordsList.filter(word => word.tagName === tagName)

  const editCurrentTag = (prevName, newName, deletedWordList) => {
    dispatchProps.editTag(prevName, newName)

    if (tagWords.length) {
      dispatchProps.editWordsList(prevName, newName, deletedWordList)
    }
  }

  const deleteCurrentTag = () => {
    dispatchProps.deleteTag(tagName)

    if (tagWords.length) {
      dispatchProps.deleteWordList(tagName)
    }
  }

  return {
    tagsList,
    tagName,
    tagWords,
    editCurrentTag,
    deleteCurrentTag,
    ...ownProps,
  }
}

export const EditTagContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(EditTagScreen)
