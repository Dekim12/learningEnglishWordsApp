import { Navigation, } from 'react-native-navigation'
import {
  ROOT_TAGS_SCREEN,
  TAG_DETAILS_SCREEN,
  EDIT_TAG_SCREEN,
  NEW_WORD_SCREEN,
} from '../../constants'

const goBack = componentId => Navigation.pop(componentId)

const createNewWord = componentId => Navigation.push(componentId, {
  component: {
    name: NEW_WORD_SCREEN,
    passProps: {
      word: '',
    },
  },
})

const toEditTag = (componentId, tagName) => Navigation.push(componentId, {
  component: {
    name: EDIT_TAG_SCREEN,
    passProps: {
      tagName,
      goBack,
    },
    options: {
      topBar: {
        subtitle: {
          text: 'Edit Tag',
        },
      },
    },
  },
})

const toTagDetails = (componentId, tagName) => Navigation.push(componentId, {
  component: {
    name: TAG_DETAILS_SCREEN,
    passProps: {
      tagName,
      createNewWord,
    },
    options: {
      topBar: {
        subtitle: {
          text: tagName,
        },
      },
    },
  },
})

export const TagsStack = {
  stack: {
    children: [
      {
        component: {
          name: ROOT_TAGS_SCREEN,
          passProps: {
            toTagDetails,
            toEditTag,
          },
          options: {
            topBar: {
              subtitle: {
                text: 'All Tags',
              },
              backButton: {
                visible: false,
              },
            },
          },
        },
      }
    ],
    options: {
      bottomTab: {
        text: 'Tags',
        icon: require('../../../assets/icons/tags.png'),
      },
    },
  },
}
