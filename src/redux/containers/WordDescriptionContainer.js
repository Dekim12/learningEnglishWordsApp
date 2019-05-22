import { connect, } from 'react-redux'
// import { bindActionCreators, } from 'redux'
import { find, } from 'lodash'
import { WordDescriptionScreen, } from '../../screens/WordDescriptionScreen/WordDescriptionScreen'

const mapStateToProps = state => ({
  wordsList: state.wordsDataState.wordsList,
})

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     getAllBeers,
//   },
//   dispatch
// )

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { wordsList, } = stateProps
  const { navigation, } = ownProps

  const id = navigation.getParam('id')
  const wordData = find(wordsList, word => word.id === id)

  return { wordData, ...dispatchProps, ...ownProps, }
}

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(WordDescriptionScreen)
