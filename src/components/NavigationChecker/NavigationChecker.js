// @flow

import * as React from 'react'
import { Navigation, } from 'react-native-navigation'
import * as movementFunctions from '../../navigation/stacks/movementFunctions'

type Config = {}

type State = { isActive: boolean }

export const NavigationChecker = (
  WrappedComponent: React.AbstractComponent<Config>
): React.AbstractComponent<Config> => class extends React.Component<Config, State> {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)

    this.state = {
      isActive: true,
    }
  }

    componentDidAppear = (): void => {
      this.setState({ isActive: true, })
    }

    changeScreen = (functionName: string, ...params: any): void => {
      const { isActive, } = this.state

      if (isActive) {
        this.setState({ isActive: false, })

        movementFunctions[functionName](...params)
      }
    }

    render() {
      return (
        <WrappedComponent changeScreen={this.changeScreen} {...this.props} />
      )
    }
}
