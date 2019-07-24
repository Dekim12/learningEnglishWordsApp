// @flow

import React, { Component, } from 'react'
import { View, StatusBar, AppState, } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import { Navigation, } from 'react-native-navigation'
import type { NetInfoConnectedState, } from '@react-native-community/netinfo'
import { WordListContainer, } from '../../redux/containers/WordListContainer'
import { TouchableButton, Icon, PermissionPopup, } from '../../components'
import { asyncStorageInterface, } from '../../utils/asyncStorageInterface'
import {
  MOVEMENT_FUNC_NAMES,
  NET_CONNECTION_SCREEN,
  NET_CONNECTION_ID,
} from '../../constants'
import type { WordObjType, } from '../../flowAliases'
import type { TasksState, } from '../../redux/reducers/tasksReducer'
import styles from './style'

type OverlayObjType = {
  component: {
    name: string,
    id: string
  }
}

type Props = {
  componentId: string,
  changeScreen: (functionName: string, ...args: Array<any>) => void,
  tagsList: ?Array<string>,
  wordsList: ?Array<WordObjType>,
  settings: ?TasksState
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

  connectionHandler = ({ isConnected, }: NetInfoConnectedState): void => {
    if (!isConnected) {
      this.connectionIndicator = false
      const overlayObj: OverlayObjType = {
        component: {
          name: NET_CONNECTION_SCREEN,
          id: NET_CONNECTION_ID,
        },
      }

      Navigation.showOverlay(overlayObj)
    } else if (isConnected && !this.connectionIndicator) {
      this.connectionIndicator = true
      Navigation.dismissOverlay(NET_CONNECTION_ID)
    }
  }

  handleAppStateChange = (nextAppState: string): void => {
    const { wordsList, tagsList, settings, } = this.props
    if (nextAppState === 'background' && wordsList && tagsList) {
      asyncStorageInterface.setData(wordsList, tagsList, settings)
    }
  }

  componentDidMount = (): void => {
    NetInfo.addEventListener(this.connectionHandler)
    AppState.addEventListener('change', this.handleAppStateChange)
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
