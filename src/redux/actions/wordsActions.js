import { DELETE_WORD, } from '../../constants'

export const deleteWord = id => ({ type: DELETE_WORD, payload: id, })
