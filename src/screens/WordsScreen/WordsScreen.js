// @flow

import React, { Component, } from 'react'
import { View, StatusBar, } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import { Navigation, } from 'react-native-navigation'
import { WordListContainer, } from '../../redux/containers/WordListContainer'
import { TouchableButton, Icon, PermissionPopup, } from '../../components'
import {
  MOVEMENT_FUNC_NAMES,
  NET_CONNECTION_SCREEN,
  NET_CONNECTION_ID,
} from '../../constants'
import styles from './style'

type OverlayObjType = {
  component: {
    name: String,
    id: string
  }
}

type NetStateType = {
  details: ?{ cellularGeneration: string, isConnectionExpensive: boolean },
  isConnected: boolean,
  type: ?string
}

type Props = {
  componentId: string,
  changeScreen: (functionName: string, ...args: Array<any>) => void
}

type State = {
  permissionVisible: boolean,
  permissionResolve: ?() => void
}

class WordsScreen extends Component<Props, State> {
  connectionIndicator: boolean

  constructor(props: Props) {
    super(props)

    this.state = { permissionVisible: false, permissionResolve: null, }
    this.connectionIndicator = true
  }

  connectionHandler = (netState: NetStateType): void => {
    if (!netState.isConnected) {
      this.connectionIndicator = false
      const overlayObj: OverlayObjType = {
        component: {
          name: NET_CONNECTION_SCREEN,
          id: NET_CONNECTION_ID,
        },
      }

      Navigation.showOverlay(overlayObj)
    } else if (netState.isConnected && !this.connectionIndicator) {
      Navigation.dismissOverlay(NET_CONNECTION_ID)
    }
  }

  componentDidMount = (): void => {
    NetInfo.addEventListener(this.connectionHandler)
  }

  toDescription = (id: number, word: string): void => {
    const { componentId, changeScreen, } = this.props
    changeScreen(MOVEMENT_FUNC_NAMES.wordDescription, componentId, id, word)
  }

  toNewWord = (word: string): void => {
    const { componentId, changeScreen, } = this.props
    changeScreen(
      MOVEMENT_FUNC_NAMES.newWord,
      componentId,
      typeof word === 'string' ? word : ''
    )
  }

  setPermissionFunctions = (resolve: () => void): void => {
    this.setState({
      permissionVisible: true,
      permissionResolve: resolve,
    })
  }

  refreshPermission = (): void => {
    this.setState({
      permissionVisible: false,
      permissionResolve: null,
    })
  }

  render() {
    const { permissionVisible, permissionResolve, } = this.state

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <WordListContainer
          openDescription={this.toDescription}
          setPermission={this.setPermissionFunctions}
          addNewWord={this.toNewWord}
        />
        <TouchableButton style={styles.addButton} onPress={this.toNewWord}>
          <Icon name='plus' size={33} color='#ffffff' />
        </TouchableButton>
        {permissionVisible && (
          <PermissionPopup
            resolve={permissionResolve}
            refresh={this.refreshPermission}
            isWord
          />
        )}
      </View>
    )
  }
}

export { WordsScreen, }
