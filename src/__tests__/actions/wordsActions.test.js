import configureStore from 'redux-mock-store'
import * as wordsActions from '../../redux/actions/wordsActions'
import * as actionTypes from '../../constants/actionTypes'

const mockStore = configureStore()
const store = mockStore()

describe('wordsActions', () => {
  const wordData = {
    id: 12,
    word: 'hello',
    translate: ['привет'],
  }
  const prevName = 'hello'
  const newName = 'hi'
  const wordList = ['hello', 'hi']
  const tagName = 'myTag'

  beforeEach(() => {
    store.clearActions()
  })

  test('should dispatch the deleteWord action', () => {
    const wordId = 12
    const expectedActions = [
      {
        type: actionTypes.DELETE_WORD,
        payload: wordId,
      }
    ]

    store.dispatch(wordsActions.deleteWord(wordId))
    expect(store.getActions()).toStrictEqual(expectedActions)
  })

  test('should dispatch the editWord action', () => {
    const expectedActions = [
      {
        type: actionTypes.EDIT_WORD,
        payload: wordData,
      }
    ]

    store.dispatch(wordsActions.editWord(wordData))
    expect(store.getActions()).toStrictEqual(expectedActions)
  })

  test('should dispatch the editWordsList action', () => {
    const expectedActions = [
      {
        type: actionTypes.EDIT_WORDS_LIST,
        payload: { prevName, newName, deletedWordList: wordList, },
      }
    ]

    store.dispatch(wordsActions.editWordsList(prevName, newName, wordList))
    expect(store.getActions()).toStrictEqual(expectedActions)
  })

  test('should dispatch the deleteWordList action', () => {
    const expectedActions = [
      {
        type: actionTypes.DELETE_WORDS_LIST,
        payload: tagName,
      }
    ]

    store.dispatch(wordsActions.deleteWordList(tagName))
    expect(store.getActions()).toStrictEqual(expectedActions)
  })
})
