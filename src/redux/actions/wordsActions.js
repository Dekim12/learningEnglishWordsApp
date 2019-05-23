import { DELETE_WORD, EDIT_WORD, } from '../../constants'

export const deleteWord = id => ({ type: DELETE_WORD, payload: id, })

export const editWord = newWord => ({ type: EDIT_WORD, payload: newWord, })
