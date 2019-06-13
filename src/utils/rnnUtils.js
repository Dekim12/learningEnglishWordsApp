import React from 'react'
import { Provider, } from 'react-redux'
import store from '../redux/store'
import { NavigationChecker, } from '../components'

const AppStoreProvider = ({ children, }) => (
  <Provider store={store}>{children}</Provider>
)

export const WrappedComponent = (Component) => {
  const UpgradedComponent = NavigationChecker(Component)

  return function inject(props) {
    const EnhancedComponent = () => (
      <AppStoreProvider>
        <UpgradedComponent {...props} />
      </AppStoreProvider>
    )

    return <EnhancedComponent />
  }
}
