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

  test('setSettings action creator have to send an expected action', () => {
    const expectedAction = [
      {
        type: SET_SETTINGS,
        payload: settings,
      }
    ]

    store.dispatch(tasksActions.setSettings(settings))
    expect(store.getActions()).toStrictEqual(expectedAction)
  })

  test('setAnswers action creator have to send an expected action', () => {
    const expectedAction = [
      {
        type: SET_ANSWERS,
        payload: { allAnswers, rightAnswers, },
      }
    ]

    store.dispatch(tasksActions.setAnswers(allAnswers, rightAnswers))
    expect(store.getActions()).toStrictEqual(expectedAction)
  })
})
