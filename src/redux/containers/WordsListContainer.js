import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordList)
