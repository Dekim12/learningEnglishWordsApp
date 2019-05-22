import { connect, } from 'react-redux'
// import { bindActionCreators, } from 'redux'
import { WordList, } from '../../components'

const mapStateToProps = state => ({
  wordsList: state.wordsDataState.wordsList,
})

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     getAllBeers,
//   },
//   dispatch
// )

export default connect(mapStateToProps)(WordList)
