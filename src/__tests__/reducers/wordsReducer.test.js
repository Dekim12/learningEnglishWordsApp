import { sortBy, } from 'lodash'
import wordsReducer from '../../redux/reducers/wordsReducer'
import {
  fakeData,
  DELETE_WORD,
  EDIT_WORD,
  EDIT_WORDS_LIST,
  DELETE_WORDS_LIST,
} from '../../constants'

const sortedWordsList = sortBy(fakeData, data => data.word)

describe('wordsReducer', () => {
  test('should return a default state after receiving a nonexistent action', () => {
    const action = { type: 'NON_EXISTENT_ACTION', }
    const initialState = {
      wordsList: sortedWordsList,
    }

    expect(wordsReducer(undefined, action)).toStrictEqual(initialState)
  })

  test('should delete a word in wordList by id after receiving the DELETE_WORD action', () => {
    const id = 1
    const action = {
      type: DELETE_WORD,
      payload: id,
    }

    const newList = sortedWordsList.filter(word => word.id !== id)

    const expectedState = {
      wordsList: newList,
    }

    expect(wordsReducer(undefined, action)).toStrictEqual(expectedState)
  })

  test('should update single item in wordList after receiving the EDIT_WORD action', () => {
    const newWordData = { id: 1, word: 'hello', translate: ['привет'], }
    const action = {
      type: EDIT_WORD,
      payload: newWordData,
    }

    const newList = sortedWordsList.map((word) => {
      if (word.id === newWordData.id) {
        return newWordData
      }
      return word
    })

    const expectedState = {
      wordsList: newList,
    }

    expect(wordsReducer(undefined, action)).toStrictEqual(expectedState)
  })

  test('should delete some words in wordList by tag name after receiving the DELETE_WORDS_LIST action', () => {
    const tagName = '112'
    const action = {
      type: DELETE_WORDS_LIST,
      payload: tagName,
    }

    const newList = sortedWordsList.filter(word => word.tagName !== tagName)
    const expectedState = {
      wordsList: newList,
    }

    expect(wordsReducer(undefined, action)).toStrictEqual(expectedState)
  })

  test('should remove words by in wordList after receiving the EDIT_WORDS_LIST action', () => {
    const deletedWordList = [1, 2, 3]
    const action = {
      type: EDIT_WORDS_LIST,
      payload: { deletedWordList, },
    }

    const defaultWordsList = wordsReducer(undefined, {}).wordsList

    const updatedList = wordsReducer(undefined, action).wordsList.filter(
      elem => deletedWordList.indexOf(elem.id) === -1
    )

    expect(updatedList.length).toBe(
      defaultWordsList.length - deletedWordList.length
    )
  })

  test('should change a tagName property in some words using a previous and new tag name after receiving the EDIT_WORDS_LIST action', () => {
    const prevTagName = '112'
    const newTagName = '11211'

    const action = {
      type: EDIT_WORDS_LIST,
      payload: {
        prevName: prevTagName,
        newName: newTagName,
        deletedWordList: [],
      },
    }

    const necessaryWords = []
    wordsReducer(undefined, {}).wordsList.forEach((elem) => {
      if (elem.tagName === prevTagName) {
        necessaryWords.push(elem.id)
      }
    })

    const updatedWords = []
    wordsReducer(undefined, action).wordsList.forEach((elem) => {
      if (elem.tagName === newTagName) {
        updatedWords.push(elem.id)
      }
    })

    expect(updatedWords).toEqual(necessaryWords)
  })
})
