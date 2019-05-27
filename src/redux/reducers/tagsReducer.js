import {} from '../../constants'

const TAGS_LIST = [
  'myTagList',
  'secondTag',
  'sfjk',
  '112',
  'sdlfjakljasdlfjlsfgd fgdlsgfsdf',
  'myTagList',
  'secondTag',
  'sfjk',
  '112',
  'sdlfjakljasdlfjlsfgd fgdlsgfsdf',
  'myTagList',
  'secondTag',
  'sfjk',
  '112',
  'sdlfjakljasdlfjlsfgd fgdlsgfsdf'
]

const initialState = {
  tagsList: TAGS_LIST,
}

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE': {
      return { ...state, }
    }

    default:
      return state
  }
}

export default tagsReducer
