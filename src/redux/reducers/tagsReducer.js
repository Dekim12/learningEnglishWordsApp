// @flow

import { sortBy, } from 'lodash'
import { ADD_TAG, EDIT_TAG, DELETE_TAG, SET_TAG_LIST, } from '../../constants'
import type { ReduxAction, } from '../../flowAliases'

type TagActionPayload =
  | string
  | { prevName: string, newName: string }
  | Array<string>

export type TagAction = ReduxAction & {
  payload: TagActionPayload
}

export type TagsState = {
  +tagsList: ?Array<string>
}

const initialState: TagsState = {
  tagsList: null,
}

const tagsReducer = (state: TagsState = initialState, action: TagAction) => {
  switch (action.type) {
    case SET_TAG_LIST: {
      return { ...state, tagsList: action.payload, }
    }
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
