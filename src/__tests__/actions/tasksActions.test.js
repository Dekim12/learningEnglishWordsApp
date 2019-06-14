import configureStore from 'redux-mock-store'
import * as tasksActions from '../../redux/actions/tasksActions'
import { SET_SETTINGS, SET_ANSWERS, } from '../../constants'

const mockStore = configureStore()
const store = mockStore()

describe('tasksActions', () => {
  const settings = {
    random: false,
    allTags: false,
    tagsForTask: ['tag1'],
    amountOfWords: 3,
  }

  const allAnswers = 12
  const rightAnswers = 10

  beforeEach(() => {
    store.clearActions()
  })

  test('setSettings action', () => {
    const expectedActions = [
      {
        type: SET_SETTINGS,
        payload: settings,
      }
    ]

    store.dispatch(tasksActions.setSettings(settings))
    expect(store.getActions()).toStrictEqual(expectedActions)
  })

  test('setAnswers action', () => {
    const expectedActions = [
      {
        type: SET_ANSWERS,
        payload: { allAnswers, rightAnswers, },
      }
    ]

    store.dispatch(tasksActions.setAnswers(allAnswers, rightAnswers))
    expect(store.getActions()).toStrictEqual(expectedActions)
  })
})
