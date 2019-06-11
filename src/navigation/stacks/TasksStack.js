import { ROOT_TASKS_SCREEN, } from '../../constants'

export const TasksStack = {
  stack: {
    children: [
      {
        component: {
          name: ROOT_TASKS_SCREEN,
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
