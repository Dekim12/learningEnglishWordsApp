import { ROOT_WORDS_SCREEN, } from '../../constants'

export const WordsStack = {
  stack: {
    children: [
      {
        component: {
          name: ROOT_WORDS_SCREEN,
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
