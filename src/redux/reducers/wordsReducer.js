// @flow

import { sortBy, } from 'lodash'
import {
  fakeData,
  DELETE_WORD,
  EDIT_WORD,
  EDIT_WORDS_LIST,
  DELETE_WORDS_LIST,
  ADD_WORD,
} from '../../constants'
import type { WordObjType, ReduxAction, } from '../../flowAliases'

type WordActionPayload =
  | string
  | number
  | WordObjType
  | { prevName: string, newName: string, deletedWordList: Array<number> }

export type WordAction = ReduxAction & {
  payload: WordActionPayload
}

export type WordsState = {
  +wordsList: Array<WordObjType>
}

const initialState: WordsState = {
  wordsList: sortBy(fakeData, data => data.word),
}

const wordsReducer = (state: WordsState = initialState, action: WordAction) => {
  switch (action.type) {
    case DELETE_WORD: {
      const newList: Array<WordObjType> = state.wordsList.filter(
        (word: WordObjType) => word.id !== action.payload
      )

      return { ...state, wordsList: newList, }
    }
    case EDIT_WORD: {
      const newList: Array<WordObjType> = state.wordsList.map(
        (word: WordObjType) => {
          if (word.id === action.payload.id) {
            return action.payload
          }
          return word
        }
      )
      return { ...state, wordsList: newList, }
    }
    case EDIT_WORDS_LIST: {
      const { prevName, newName, deletedWordList, } = action.payload

      const filteredList: Array<WordObjType> = state.wordsList.filter(
        (word: WordObjType) => deletedWordList.indexOf(word.id) === -1
      )

      filteredList.forEach((word: WordObjType) => {
        if (word.tagName === prevName) {
          word.tagName = newName
        }
      })

      return { ...state, wordsList: filteredList, }
    }
    case DELETE_WORDS_LIST: {
      const newList: Array<WordObjType> = state.wordsList.filter(
        (word: WordObjType) => word.tagName !== action.payload
      )

      return { ...state, wordsList: newList, }
    }
    case ADD_WORD: {
      const newList: Array<WordObjType> = state.wordsList.concat(action.payload)

      return { ...state, wordsList: newList, }
    }
    default:
      return state
  }
}

export default wordsReducer
