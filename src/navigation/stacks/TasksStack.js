import { ROOT_TASKS_SCREEN, } from '../../constants'
import { toSettings, toStatistic, openTask, } from './movementFunctions'

export const TasksStack = {
  stack: {
    children: [
      {
        component: {
          name: ROOT_TASKS_SCREEN,
          passProps: { toSettings, toStatistic, openTask, },
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
