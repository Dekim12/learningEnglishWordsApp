import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { find, } from 'lodash'
import { EditWordScreen, } from '../../screens'
import { editWord, } from '../actions'

const mapStateToProps = state => ({
  wordsList: state.wordsDataState.wordsList,
  tagsList: state.tagsState.tagsList,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    editWord,
  },
  dispatch
)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { wordsList, tagsList, } = stateProps
  const { navigation, } = ownProps

  const id = navigation.getParam('id')
  const wordData = find(wordsList, word => word.id === id)

  return { wordData, tagsList, ...dispatchProps, ...ownProps, }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(EditWordScreen)
