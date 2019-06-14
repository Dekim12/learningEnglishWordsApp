import tasksReducer from '../../redux/reducers/tasksReducer'
import { SET_SETTINGS, SET_ANSWERS, } from '../../constants'

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'NON_EXISTENT_ACTION', }
    const initialState = {
      allTags: true,
      tagsForTask: [],
      amountOfWords: 5,
      random: false,
      allAnswers: 0,
      rightAnswers: 0,
    }

    expect(tasksReducer(undefined, action)).toStrictEqual(initialState)
  })
})

describe('SET_SETTINGS', () => {
  test('returns the correct state after SET_SETTINGS action', () => {
    const action = {
      type: SET_SETTINGS,
      payload: {
        random: true,
        allTags: false,
        tagsForTask: ['tag1', 'tag2'],
        amountOfWords: 3,
      },
    }
    const expectedState = {
      allTags: false,
      tagsForTask: ['tag1', 'tag2'],
      amountOfWords: 3,
      random: true,
      allAnswers: 0,
      rightAnswers: 0,
    }

    expect(tasksReducer(undefined, action)).toStrictEqual(expectedState)
  })
})

describe('SET_ANSWERS', () => {
  test('returns the correct state after SET_ANSWERS action', () => {
    const action = {
      type: SET_ANSWERS,
      payload: {
        allAnswers: 20,
        rightAnswers: 12,
      },
    }
    const expectedState = {
      allTags: true,
      tagsForTask: [],
      amountOfWords: 5,
      random: false,
      allAnswers: 20,
      rightAnswers: 12,
    }

    expect(tasksReducer(undefined, action)).toStrictEqual(expectedState)
  })
})
