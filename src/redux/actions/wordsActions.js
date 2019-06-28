// @flow

import {
  DELETE_WORD,
  EDIT_WORD,
  EDIT_WORDS_LIST,
  DELETE_WORDS_LIST,
} from '../../constants'
import type { WordAction, WordObjType, } from '../../flowAliases'

export const deleteWord = (id: number): WordAction => ({
  type: DELETE_WORD,
  payload: id,
})

export const editWord = (newWord: WordObjType): WordAction => ({
  type: EDIT_WORD,
  payload: newWord,
})

export const editWordsList = (
  prevName: string,
  newName: string,
  deletedWordList: Array<number>
): WordAction => ({
  type: EDIT_WORDS_LIST,
  payload: { prevName, newName, deletedWordList, },
})

export const deleteWordList = (tagName: string): WordAction => ({
  type: DELETE_WORDS_LIST,
  payload: tagName,
})
