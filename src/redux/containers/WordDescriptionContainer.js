import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { find, } from 'lodash'
import { WordDescriptionScreen, } from '../../screens/WordDescriptionScreen/WordDescriptionScreen'
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

  const id = navigation.getParam('id')
  const wordData = find(wordsList, word => word.id === id)

  return { wordData, ...dispatchProps, ...ownProps, }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(WordDescriptionScreen)
