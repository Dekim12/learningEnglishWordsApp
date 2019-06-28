// @flow

import React, { Component, } from 'react'
import type { AbstractComponent, } from 'react'
import { Navigation, } from 'react-native-navigation'
import NetInfo from '@react-native-community/netinfo'
import * as movementFunctions from '../../navigation/stacks/movementFunctions'

import { NET_CONNECTION_SCREEN, } from '../../constants'

const toStatisticOverlay = () => Navigation.showOverlay({
  component: {
    name: NET_CONNECTION_SCREEN,
  },
})

type Config = {}

type State = { isActive: boolean }

export const NavigationChecker = (
  WrappedComponent: AbstractComponent<Config>
): AbstractComponent<Config> => class extends Component<Config, State> {
    unsubscribe: ?() => void

    constructor(props) {
      super(props)
      Navigation.events().bindComponent(this)

      this.state = {
        isActive: true,
      }

      this.unsubscribe = null
    }

    componentDidMount = (): void => {
      this.unsubscribe = NetInfo.addEventListener((state) => {
        console.log('Is connected?', state)

        if (!state.isConnected) {
          toStatisticOverlay()
        }
      })
    }

    componentWillUnmount = (): void => {
      if (this.unsubscribe) {
        this.unsubscribe()
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
