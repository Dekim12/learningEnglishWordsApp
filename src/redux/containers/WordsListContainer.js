import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { sortBy, } from 'lodash'
import { WordList, } from '../../components'
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

  const sortedList = sortBy(wordsList, tag => tag.word)

  return { wordsList: sortedList, ...dispatchProps, ...ownProps, }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(WordList)
