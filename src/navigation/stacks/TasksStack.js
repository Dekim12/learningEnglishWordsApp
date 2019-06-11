import { Navigation, } from 'react-native-navigation'
import {
  ROOT_TASKS_SCREEN,
  SETTINGS_SCREEN,
  STATISTIC_SCREEN,
  // CURRENT_TASK_SCREEN,
} from '../../constants'

const goBack = componentId => Navigation.pop(componentId)

const toStatistic = componentId => Navigation.push(componentId, {
  component: {
    name: STATISTIC_SCREEN,
    passProps: {
      goBack,
    },
    options: {
      topBar: {
        subtitle: {
          text: 'Your Statistic',
        },
      },
    },
  },
})

const toSettings = componentId => Navigation.push(componentId, {
  component: {
    name: SETTINGS_SCREEN,
    passProps: {
      goBack,
    },
    options: {
      topBar: {
        subtitle: {
          text: 'Tasks Settings',
        },
      },
    },
  },
})

export const TasksStack = {
  stack: {
    children: [
      {
        component: {
          name: ROOT_TASKS_SCREEN,
          passProps: { toSettings, toStatistic, },
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
