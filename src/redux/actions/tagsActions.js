import { ADD_TAG, EDIT_TAG, } from '../../constants'

export const addTag = name => ({ type: ADD_TAG, payload: name, })

export const editTag = (prevName, newName) => ({
  type: EDIT_TAG,
  payload: { prevName, newName, },
})
