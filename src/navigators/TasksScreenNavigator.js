import { createStackNavigator, } from 'react-navigation'
import {
  StatisticsScreenContainer,
  SettingsScreenContainer,
  TaskContainer,
} from '../redux/containers'
import { TasksScreen, } from '../screens'
import {
  ROOT_TASKS_SCREEN,
  SETTINGS_SCREEN,
  STATISTIC_SCREEN,
  CURRENT_TASK_SCREEN,
  COMMON_STACK_NAVIGATOR_OPTIONS,
} from '../constants'

export const TasksScreenNavigator = createStackNavigator(
  {
    [ROOT_TASKS_SCREEN]: TasksScreen,
    [STATISTIC_SCREEN]: StatisticsScreenContainer,
    [SETTINGS_SCREEN]: SettingsScreenContainer,
    [CURRENT_TASK_SCREEN]: TaskContainer,
  },
  {
    defaultNavigationOptions: COMMON_STACK_NAVIGATOR_OPTIONS,
  }
)
