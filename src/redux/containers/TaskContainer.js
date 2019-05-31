import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { CurrentTaskScreen, } from '../../screens'
import {} from '../actions'

const mapStateToProps = state => ({
  tagsList: state.tagsState.tagsList,
  wordsList: state.wordsDataState.wordsList,
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTaskScreen)
