import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { find, } from 'lodash'
import { WordDescriptionScreen, } from './WordDescriptionScreen'
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
  const { id, } = ownProps

  const wordData = find(wordsList, currentWord => currentWord.id === id)

  return { wordData, ...dispatchProps, ...ownProps, }
}

export const WordDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(WordDescriptionScreen)