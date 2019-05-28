import { connect, } from 'react-redux'
// import { bindActionCreators, } from 'redux'
import { EditTagScreen, } from '../../screens'

const mapStateToProps = state => ({
  wordsList: state.wordsDataState.wordsList,
})

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     deleteWord,
//   },
//   dispatch
// )

export default connect(mapStateToProps)(EditTagScreen)
