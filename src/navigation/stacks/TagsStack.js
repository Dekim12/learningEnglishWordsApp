import { ROOT_TAGS_SCREEN, } from '../../constants'

export const TagsStack = {
  stack: {
    children: [
      {
        component: {
          name: ROOT_TAGS_SCREEN,
        },
      }
    ],
    options: {
      bottomTab: {
        text: 'Tags',
        icon: require('../../assets/icon/tags.png'),
      },
    },
  },
}
