import { DELETE_WORD, EDIT_WORD, EDIT_WORDS_LIST, } from '../../constants'

export const deleteWord = id => ({ type: DELETE_WORD, payload: id, })

export const editWord = newWord => ({ type: EDIT_WORD, payload: newWord, })

export const editWordsList = (prevName, newName, deletedWordList) => ({
  type: EDIT_WORDS_LIST,
  payload: { prevName, newName, deletedWordList, },
})
