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
} from '../constants'

export const TasksScreenNavigator = createStackNavigator(
  {
    [ROOT_TASKS_SCREEN]: TasksScreen,
    [STATISTIC_SCREEN]: StatisticsScreenContainer,
    [SETTINGS_SCREEN]: SettingsScreenContainer,
    [CURRENT_TASK_SCREEN]: TaskContainer,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#100E17',
        height: 42,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 30,
        fontFamily: 'FFF_Tusj',
      },
    },
  }
)
