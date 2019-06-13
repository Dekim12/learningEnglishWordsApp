import { ROOT_WORDS_SCREEN, } from '../../constants'

export const WordsStack = {
  stack: {
    children: [
      {
        component: {
          name: ROOT_WORDS_SCREEN,
          id: 'wordStack',
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
