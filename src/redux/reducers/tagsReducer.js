import { sortBy, } from 'lodash'
import { ADD_TAG, EDIT_TAG, } from '../../constants'

const TAGS_LIST = [
  'myTagList',
  'secondTag',
  'sfjk',
  '112',
  'sdlfjakljasdlfjlsfgd fgdlsgfsdf',
  'firstTag',
  'peoples',
  'verbs',
  'fruits',
  'sfds sf hgh 1154f',
  'dffjkkdkf',
  '1111111',
  'TTTshdf',
  'tTgs',
  'tttttt'
]

const initialState = {
  tagsList: sortBy(TAGS_LIST, tag => tag.toLowerCase()),
}

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAG: {
      const newTagList = state.tagsList.concat(action.payload)

      return { ...state, tagsList: newTagList, }
    }
    case EDIT_TAG: {
      const { prevName, newName, } = action.payload
      const newTagsList = state.tagsList.map((tag) => {
        if (tag === prevName) {
          return newName
        }
        return tag
      })

      return { ...state, tagsList: newTagsList, }
    }
    default:
      return state
  }
}

export default tagsReducer
