import { connect, } from 'react-redux'
import { CurrentTaskScreen, } from '../../screens'

const mapStateToProps = state => ({
  tagsList: state.tagsState.tagsList,
  wordsList: state.wordsDataState.wordsList,
})

export default connect(mapStateToProps)(CurrentTaskScreen)
