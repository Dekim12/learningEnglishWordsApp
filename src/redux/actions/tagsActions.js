// @flow

import type { Dispatch, } from 'redux'
import { ADD_TAG, EDIT_TAG, DELETE_TAG, SET_TAG_LIST, } from '../../constants'
import { asyncStorageInterface, } from '../../utils/asyncStorageInterface'
import type { TagAction, } from '../reducers/tagsReducer'

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

const setTagsList = (data: Array<string>): TagAction => ({
  type: SET_TAG_LIST,
  payload: data,
})

export const getTagsList = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const response: ?Array<string> = await asyncStorageInterface.getTags()

    if (response) {
      dispatch(setTagsList(response))
    }
  } catch (error) {
    console.warn(error)
  }
}
