import {} from '../../constants'

const TAGS_LIST = [
  'myTagList',
  'secondTag',
  'sfjk',
  '112',
  'sdlfjakljasdlfjlsfgd fgdlsgfsdf',
  'firstTag',
  'peoples',
  'verbs',
  'fruits',
  'sfds sf hgh 1154f',
  'dffjkkdkf',
  '1111111',
  'TTTshdf',
  'tTgs',
  'tttttt'
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
