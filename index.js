import { Navigation, } from 'react-native-navigation'
import { sortBy, } from 'lodash'

import { pushTabsScreen, } from './src/navigation'
import { asyncStorageInterface, } from './src/utils/asyncStorageInterface'
import { fakeData, fakeTagList, } from './src/constants'

asyncStorageInterface.getKeys().then((resolve) => {
  if (resolve.length === 0) {
    asyncStorageInterface.setData(
      sortBy(fakeData, data => data.word),
      sortBy(fakeTagList, tag => tag.toLowerCase()),
      null
    )
  }
})

Navigation.events().registerAppLaunchedListener(pushTabsScreen)
