import React from 'react'
import { Provider, } from 'react-redux'
import store from './redux/store'
import { RootNavigator, } from './navigators'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}
