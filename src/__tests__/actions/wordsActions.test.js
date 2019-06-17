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

  test('deleteWord action creator have to send an expected action', () => {
    const expectedAction = [
      {
        type: actionTypes.DELETE_WORD,
        payload: 12,
      }
    ]

    store.dispatch(wordsActions.deleteWord(12))
    expect(store.getActions()).toStrictEqual(expectedAction)
  })

  test('editWord action creator have to send an expected action', () => {
    const expectedAction = [
      {
        type: actionTypes.EDIT_WORD,
        payload: wordData,
      }
    ]

    store.dispatch(wordsActions.editWord(wordData))
    expect(store.getActions()).toStrictEqual(expectedAction)
  })

  test('editWordsList action creator have to send an expected action', () => {
    const expectedAction = [
      {
        type: actionTypes.EDIT_WORDS_LIST,
        payload: { prevName, newName, deletedWordList: wordList, },
      }
    ]

    store.dispatch(wordsActions.editWordsList(prevName, newName, wordList))
    expect(store.getActions()).toStrictEqual(expectedAction)
  })

  test('deleteWordList action creator have to send an expected action', () => {
    const expectedAction = [
      {
        type: actionTypes.DELETE_WORDS_LIST,
        payload: tagName,
      }
    ]

    store.dispatch(wordsActions.deleteWordList(tagName))
    expect(store.getActions()).toStrictEqual(expectedAction)
  })
})
