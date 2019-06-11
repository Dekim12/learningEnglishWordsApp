import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { TagsScreen, } from './TagsScreen'
import { addTag, } from '../../redux/actions'

const mapStateToProps = state => ({
  tagsList: state.tagsState.tagsList,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addTag,
  },
  dispatch
)

export const TagsScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsScreen)
