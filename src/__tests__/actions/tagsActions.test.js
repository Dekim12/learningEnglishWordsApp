import configureStore from 'redux-mock-store'
import * as tagsActions from '../../redux/actions/tagsActions'
import { ADD_TAG, EDIT_TAG, DELETE_TAG, } from '../../constants'

const mockStore = configureStore()
const store = mockStore()

describe('tagsActions', () => {
  const prevName = 'myTag'
  const newName = 'MyTAG'
  const tagName = 'myTag'

  beforeEach(() => {
    store.clearActions()
  })

  test('should dispatch the addTag action', () => {
    const expectedActions = [
      {
        type: ADD_TAG,
        payload: tagName,
      }
    ]

    store.dispatch(tagsActions.addTag(tagName))
    expect(store.getActions()).toStrictEqual(expectedActions)
  })

  test('should dispatch the editTag action', () => {
    const expectedActions = [
      {
        type: EDIT_TAG,
        payload: { prevName, newName, },
      }
    ]

    store.dispatch(tagsActions.editTag(prevName, newName))
    expect(store.getActions()).toStrictEqual(expectedActions)
  })

  test('should dispatch the deleteTag action', () => {
    const expectedActions = [
      {
        type: DELETE_TAG,
        payload: tagName,
      }
    ]

    store.dispatch(tagsActions.deleteTag(tagName))
    expect(store.getActions()).toStrictEqual(expectedActions)
  })
})
