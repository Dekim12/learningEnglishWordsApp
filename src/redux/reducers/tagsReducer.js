// @flow

import { sortBy, } from 'lodash'
import { fakeTagList, ADD_TAG, EDIT_TAG, DELETE_TAG, } from '../../constants'
import type { TagAction, } from '../../flowAliases'

type TagsState = {
  +tagsList: Array<string>
}

const initialState: TagsState = {
  tagsList: sortBy(fakeTagList, tag => tag.toLowerCase()),
}

const tagsReducer = (state: TagsState = initialState, action: TagAction) => {
  switch (action.type) {
    case ADD_TAG: {
      const newTagList: Array<string> = sortBy(
        state.tagsList.concat(action.payload),
        tag => tag.toLowerCase()
      )

      return { ...state, tagsList: newTagList, }
    }
    case EDIT_TAG: {
      if (typeof action.payload === 'string') {
        return state
      }

      const { prevName, newName, } = action.payload

      const newTagsList: Array<string> = state.tagsList.map((tag: string) => {
        if (tag === prevName) {
          return newName
        }
        return tag
      })

      return { ...state, tagsList: newTagsList, }
    }
    case DELETE_TAG: {
      const newTagList: Array<string> = state.tagsList.filter(
        (tag: string) => tag !== action.payload
      )

      return { ...state, tagsList: newTagList, }
    }
    default:
      return state
  }
}

export default tagsReducer
