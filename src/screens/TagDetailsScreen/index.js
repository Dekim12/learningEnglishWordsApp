import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { TagDetailsScreen, } from './TagDetailsScreen'
import { deleteWord, } from '../../redux/actions'

const mapStateToProps = state => ({
  wordsList: state.wordsDataState.wordsList,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    deleteWord,
  },
  dispatch
)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { wordsList, } = stateProps
  const { tagName, } = ownProps

  const tagsWordsList = wordsList.filter(word => word.tagName === tagName)

  return { ...dispatchProps, ...ownProps, tagsWordsList, tagName, }
}

export const TagDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TagDetailsScreen)
