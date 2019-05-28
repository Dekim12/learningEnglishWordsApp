import { connect, } from 'react-redux'
// import { bindActionCreators, } from 'redux'
import { sortBy, } from 'lodash'
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

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { tagsList, } = stateProps

  const sortedList = sortBy(tagsList, tag => tag.toLowerCase())

  return { tagsList: sortedList, ...dispatchProps, ...ownProps, }
}

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(TagsList)
