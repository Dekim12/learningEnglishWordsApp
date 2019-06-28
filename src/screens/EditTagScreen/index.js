// @flow

import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import type { Dispatch, } from 'redux'
import { EditTagScreen, } from './EditTagScreen'
import {
  editTag,
  editWordsList,
  deleteWordList,
  deleteTag,
} from '../../redux/actions'
import type { WordObjType, RootState, } from '../../flowAliases'
import type { TagsState, } from '../../redux/reducers/tagsReducer'
import type { WordsState, } from '../../redux/reducers/wordsReducer'

type EditTagProps = WordsState & TagsState

const mapStateToProps = (state: RootState): EditTagProps => ({
  wordsList: state.wordsDataState.wordsList,
  tagsList: state.tagsState.tagsList,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
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

  const tagWords: Array<WordObjType> = wordsList.filter(
    word => word.tagName === tagName
  )

  const editCurrentTag = (
    prevName: string,
    newName: string,
    deletedWordList: Array<number>
  ) => {
    dispatchProps.editTag(prevName, newName)

    if (tagWords.length) {
      dispatchProps.editWordsList(prevName, newName, deletedWordList)
    }
  }

  const deleteCurrentTag = (): void => {
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
