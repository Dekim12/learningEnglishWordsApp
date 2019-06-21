import tasksReducer from '../../redux/reducers/tasksReducer'
import { SET_SETTINGS, SET_ANSWERS, } from '../../constants'

describe('tasksReducer', () => {
  test('should return a default state after receiving a nonexistent action', () => {
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

  test('should c apply user settings after receiving the SET_SETTINGS action', () => {
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

  test('should change allAnswers and rightAnswers properties in the state after receiving the SET_ANSWERS action', () => {
    const action = {
      type: SET_ANSWERS,
      payload: {
        allAnswers: 20,
        rightAnswers: 12,
      },
    }

    expect(tasksReducer(undefined, action).rightAnswers).toBe(12)
    expect(tasksReducer(undefined, action).allAnswers).toBe(20)
  })
})
