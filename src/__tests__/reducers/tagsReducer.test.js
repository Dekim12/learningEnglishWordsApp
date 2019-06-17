import tagsReducer from '../../redux/reducers/tagsReducer'
import { ADD_TAG, EDIT_TAG, DELETE_TAG, } from '../../constants'

const sortedTagList = [
  '112',
  'firstTag',
  'fruits',
  'myTagList',
  'peoples',
  'secondTag',
  'sfjk',
  'tTgs',
  'TTTshdf',
  'verbs'
]

describe('tagsReducer', () => {
  test('should return a correct state after receiving a nonexistent action', () => {
    const action = { type: 'NON_EXISTENT_ACTION', }
    const initialState = {
      tagsList: sortedTagList,
    }

    expect(tagsReducer(undefined, action)).toStrictEqual(initialState)
  })

  test('should add a new tag name in tagList after receiving the ADD_TAG action', () => {
    const action = { type: ADD_TAG, payload: 'newTag', }
    const newTagList = [
      '112',
      'firstTag',
      'fruits',
      'myTagList',
      'newTag',
      'peoples',
      'secondTag',
      'sfjk',
      'tTgs',
      'TTTshdf',
      'verbs'
    ]

    const expectedState = {
      tagsList: newTagList,
    }

    expect(tagsReducer(undefined, action)).toStrictEqual(expectedState)
  })

  test('should change a previous tag name to a new tag name in tagList after receiving the EDIT_TAG action', () => {
    const action = {
      type: EDIT_TAG,
      payload: { prevName: 'peoples', newName: 'PEOPLES', },
    }
    const newTagList = [
      '112',
      'firstTag',
      'fruits',
      'myTagList',
      'PEOPLES',
      'secondTag',
      'sfjk',
      'tTgs',
      'TTTshdf',
      'verbs'
    ]

    const expectedState = {
      tagsList: newTagList,
    }

    expect(tagsReducer(undefined, action)).toStrictEqual(expectedState)
  })

  test('should delete tag name in tagList after receiving the DELETE_TAG action', () => {
    const action = {
      type: DELETE_TAG,
      payload: 'myTagList',
    }
    const newTagList = [
      '112',
      'firstTag',
      'fruits',
      'peoples',
      'secondTag',
      'sfjk',
      'tTgs',
      'TTTshdf',
      'verbs'
    ]

    const expectedState = {
      tagsList: newTagList,
    }

    expect(tagsReducer(undefined, action)).toStrictEqual(expectedState)
  })
})
