// @flow

import { sortBy, } from 'lodash'
import {
  fakeData,
  DELETE_WORD,
  EDIT_WORD,
  EDIT_WORDS_LIST,
  DELETE_WORDS_LIST,
} from '../../constants'
import type { WordObj, WordAction, } from '../../flowAliases'

type State = {
  +wordsList: Array<WordObj>
}

const initialState: State = {
  wordsList: sortBy(fakeData, data => data.word),
}

const wordsReducer = (state: State = initialState, action: WordAction) => {
  switch (action.type) {
    case DELETE_WORD: {
      const newList: Array<WordObj> = state.wordsList.filter(
        (word: WordObj) => word.id !== action.payload
      )

      return { ...state, wordsList: newList, }
    }
    case EDIT_WORD: {
      const newList: Array<WordObj> = state.wordsList.map((word: WordObj) => {
        if (word.id === action.payload.id) {
          return action.payload
        }
        return word
      })
      return { ...state, wordsList: newList, }
    }
    case EDIT_WORDS_LIST: {
      const { prevName, newName, deletedWordList, } = action.payload

      const filteredList: Array<WordObj> = state.wordsList.filter(
        (word: WordObj) => deletedWordList.indexOf(word.id) === -1
      )

      filteredList.forEach((word: WordObj) => {
        if (word.tagName === prevName) {
          word.tagName = newName
        }
      })

      return { ...state, wordsList: filteredList, }
    }
    case DELETE_WORDS_LIST: {
      const newList: Array<WordObj> = state.wordsList.filter(
        (word: WordObj) => word.tagName !== action.payload
      )

      return { ...state, wordsList: newList, }
    }
    default:
      return state
  }
}

export default wordsReducer
