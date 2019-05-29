import { sortBy, } from 'lodash'
import { fakeTagList, ADD_TAG, EDIT_TAG, DELETE_TAG, } from '../../constants'

const initialState = {
  tagsList: sortBy(fakeTagList, tag => tag.toLowerCase()),
}

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAG: {
      const newTagList = sortBy(state.tagsList.concat(action.payload), tag => tag.toLowerCase())

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
    case DELETE_TAG: {
      const newTagList = state.tagsList.filter(tag => tag !== action.payload)

      return { ...state, tagsList: newTagList, }
    }
    default:
      return state
  }
}

export default tagsReducer
