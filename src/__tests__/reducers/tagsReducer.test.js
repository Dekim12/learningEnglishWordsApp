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

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'NON_EXISTENT_ACTION', }
    const initialState = {
      tagsList: sortedTagList,
    }

    expect(tagsReducer(undefined, action)).toStrictEqual(initialState)
  })
})

describe('ADD_TAG', () => {
  test('returns the correct state after ADD_TAG action', () => {
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
})

describe('EDIT_TAG', () => {
  test('returns the correct state after EDIT_TAG action', () => {
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
})

describe('DELETE_TAG', () => {
  test('returns the correct state after DELETE_TAG action', () => {
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
