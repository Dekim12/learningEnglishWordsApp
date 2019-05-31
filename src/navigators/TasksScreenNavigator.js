import { createStackNavigator, } from 'react-navigation'
import {
  StatisticsScreenContainer,
  SettingsScreenContainer,
  TaskContainer,
} from '../redux/containers'
import { TasksScreen, } from '../screens'

export const TasksScreenNavigator = createStackNavigator(
  {
    Tasks: TasksScreen,
    Statistic: StatisticsScreenContainer,
    Settings: SettingsScreenContainer,
    CurrentTask: TaskContainer,
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
