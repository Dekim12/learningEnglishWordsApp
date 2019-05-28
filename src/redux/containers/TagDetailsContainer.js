import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { TagDetailsScreen, } from '../../screens'
import { deleteWord, } from '../actions'

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
  const { navigation, } = ownProps

  const tagName = navigation.getParam('tagName')
  const tagsWordsList = wordsList.filter(word => word.tagName === tagName)

  return { ...dispatchProps, ...ownProps, tagsWordsList, tagName, }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TagDetailsScreen)
