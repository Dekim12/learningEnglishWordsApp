import { ROOT_WORDS_SCREEN, } from '../../constants'
import { createNewWord, toWordDescription, } from './movementFunctions'

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
        icon: require('../../../assets/icons/words.png'),
      },
    },
  },
}
