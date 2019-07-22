// @flow

import type { Dispatch, } from 'redux'
import {
  DELETE_WORD,
  EDIT_WORD,
  EDIT_WORDS_LIST,
  DELETE_WORDS_LIST,
  ADD_WORD,
  SET_WORD_LIST,
} from '../../constants'
import { asyncStorageInterface, } from '../../utils/asyncStorageInterface'
import type { WordObjType, } from '../../flowAliases'
import type { WordAction, } from '../reducers/wordsReducer'

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

export const addNewWord = (newWord: WordObjType): WordAction => ({
  type: ADD_WORD,
  payload: newWord,
})

const setWordsList = (data: Array<WordObjType>): WordAction => ({
  type: SET_WORD_LIST,
  payload: data,
})

export const getWordsList = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const response: ?Array<WordObjType> = await asyncStorageInterface.getWords()

    if (response) {
      dispatch(setWordsList(response))
    }
  } catch (error) {
    alert(error)
  }
}
