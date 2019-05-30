import {} from '../../constants'

const initialState = {}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TASK': {
      return { ...state, }
    }
    default:
      return state
  }
}

export default tasksReducer
