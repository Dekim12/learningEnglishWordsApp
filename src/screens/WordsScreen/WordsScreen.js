// @flow

import * as React from 'react'
import { View, StatusBar, } from 'react-native'
import { WordListContainer, } from '../../redux/containers/WordListContainer'
import { TouchableButton, Icon, PermissionPopup, } from '../../components'
import { MOVEMENT_FUNC_NAMES, } from '../../constants'
import styles from './style'

type Props = {
  componentId: string,
  changeScreen: (functionName: string, ...args: Array<any>) => void
}

type State = {
  permissionVisible: boolean,
  permissionResolve: ?() => void
}

class WordsScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { permissionVisible: false, permissionResolve: null, }
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
