const initialState = {
  tagsList: ['myTagList', 'secondTag', 'sfjk', '#12'],
}

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_WORD': {
      return { ...state, }
    }

    default:
      return state
  }
}

export default tagsReducer
