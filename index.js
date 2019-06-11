import { Navigation, } from 'react-native-navigation'
import { pushTabsScreen, } from './src/navigation'

Navigation.events().registerAppLaunchedListener(pushTabsScreen)
