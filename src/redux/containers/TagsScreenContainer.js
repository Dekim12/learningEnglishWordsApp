import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { TagsScreen, } from '../../screens/TagsScreen/TagsScreen'
import { addTag, } from '../actions'

const mapStateToProps = state => ({
  tagsList: state.tagsState.tagsList,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addTag,
  },
  dispatch
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsScreen)
