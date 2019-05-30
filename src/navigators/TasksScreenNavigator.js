import { createStackNavigator, } from 'react-navigation'
import { StatisticsScreenContainer, } from '../redux/containers'
import { TasksScreen, SettingsScreen, CurrentTaskScreen, } from '../screens'

export const TasksScreenNavigator = createStackNavigator(
  {
    Tasks: TasksScreen,
    Statistic: StatisticsScreenContainer,
    Settings: SettingsScreen,
    CurrentTask: CurrentTaskScreen,
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
