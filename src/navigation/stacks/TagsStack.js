import { ROOT_TAGS_SCREEN, } from '../../constants'

export const TagsStack = {
  stack: {
    children: [
      {
        component: {
          name: ROOT_TAGS_SCREEN,
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
