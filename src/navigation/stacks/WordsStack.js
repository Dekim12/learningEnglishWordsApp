import { Navigation, } from 'react-native-navigation'
import {
  ROOT_WORDS_SCREEN,
  NEW_WORD_SCREEN,
  WORDS_DETAILS_SCREEN,
  EDIT_WORD_SCREEN,
} from '../../constants'

const goBack = componentId => Navigation.pop(componentId)

const createNewWord = (componentId, word) => Navigation.push(componentId, {
  component: {
    name: NEW_WORD_SCREEN,
    passProps: {
      word,
    },
  },
})

const toEditWord = (componentId, id) => Navigation.push(componentId, {
  component: {
    name: EDIT_WORD_SCREEN,
    passProps: {
      id,
      goBack,
    },
    options: {
      topBar: {
        subtitle: {
          text: 'Edit Word',
        },
      },
    },
  },
})

const toWordDescription = (componentId, id, word) => Navigation.push(componentId, {
  component: {
    name: WORDS_DETAILS_SCREEN,
    passProps: {
      id,
      goBack,
      toEditWord,
    },
    options: {
      topBar: {
        subtitle: {
          text: word[0].toUpperCase().concat(word.slice(1)),
        },
      },
    },
  },
})

export const WordsStack = {
  stack: {
    children: [
      {
        component: {
          name: ROOT_WORDS_SCREEN,
          passProps: {
            createNewWord,
            toWordDescription,
          },
          options: {
            topBar: {
              subtitle: {
                text: 'All Words',
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
        text: 'Words',
        icon: require('../../assets/icon/words.png'),
      },
    },
  },
}
