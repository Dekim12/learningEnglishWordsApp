// @flow

import { ADD_TAG, EDIT_TAG, DELETE_TAG, } from '../../constants'
import type { TagAction, } from '../../flowAliases'

export const addTag = (name: string): TagAction => ({
  type: ADD_TAG,
  payload: name,
})

export const editTag = (prevName: string, newName: string): TagAction => ({
  type: EDIT_TAG,
  payload: { prevName, newName, },
})

export const deleteTag = (tagName: string): TagAction => ({
  type: DELETE_TAG,
  payload: tagName,
})
