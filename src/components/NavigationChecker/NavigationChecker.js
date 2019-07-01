// @flow

import React, { Component, } from 'react'
import type { AbstractComponent, } from 'react'
import { Navigation, } from 'react-native-navigation'
import * as movementFunctions from '../../navigation/stacks/movementFunctions'

type Config = {}

type State = { isActive: boolean }

export const NavigationChecker = (
  WrappedComponent: AbstractComponent<Config>
): AbstractComponent<Config> => class extends Component<Config, State> {
    navigationEventListener: ?() => void

    constructor(props) {
      super(props)
      this.navigationEventListener = Navigation.events().bindComponent(this)

      this.state = {
        isActive: true,
      }
    }

    componentDidAppear = (): void => {
      this.setState({ isActive: true, })
    }

    componentWillUnmount = (): void => {
      if (this.navigationEventListener) {
        this.navigationEventListener.remove()
      }
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
