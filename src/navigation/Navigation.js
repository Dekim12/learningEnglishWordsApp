import { Navigation, } from 'react-native-navigation'
import { defaultOptions, } from './options'
import registerScreens from './registerScreens'
import { WordsStack, TagsStack, TasksStack, } from './stacks'

registerScreens()

export const pushTabsScreen = () => {
  Navigation.setDefaultOptions(defaultOptions)

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [WordsStack, TagsStack, TasksStack],
      },
    },
  })
}
