import React, { Component, } from 'react'
import { Navigation, } from 'react-native-navigation'
import * as movementFunctions from '../../navigation/stacks/movementFunctions'

export const NavigationChecker = WrappedComponent => class extends Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)

    this.state = {
      isActive: true,
    }
  }

    componentDidAppear = () => {
      this.setState({ isActive: true, })
    }

    changeScreen = (functionName, ...params) => {
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
