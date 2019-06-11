import React from 'react'
import { Provider, } from 'react-redux'
import store from '../redux/store'

const AppStoreProvider = ({ children, }) => (
  <Provider store={store}>{children}</Provider>
)

export const WrappedComponent = Component => function inject(props) {
  const EnhancedComponent = () => (
    <AppStoreProvider>
      <Component {...props} />
    </AppStoreProvider>
  )

  return <EnhancedComponent />
}
