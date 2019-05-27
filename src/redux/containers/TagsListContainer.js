import { connect, } from 'react-redux'
// import { bindActionCreators, } from 'redux'
import { TagsList, } from '../../components'
// import { deleteWord, } from '../actions'

const mapStateToProps = state => ({
  tagsList: state.tagsState.tagsList,
})

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     deleteWord,
//   },
//   dispatch
// )

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(TagsList)
