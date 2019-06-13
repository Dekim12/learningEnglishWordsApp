import { ROOT_TASKS_SCREEN, } from '../../constants'

export const TasksStack = {
  stack: {
    children: [
      {
        component: {
          name: ROOT_TASKS_SCREEN,
          options: {
            topBar: {
              subtitle: {
                text: 'Tasks',
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
        text: 'Tasks',
        icon: require('../../../assets/icons/tasks.png'),
      },
    },
  },
}
