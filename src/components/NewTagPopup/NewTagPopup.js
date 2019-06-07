import React from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, } from 'react-native'
import { Icon, TouchableButton, } from '../index'
import styles from './style'

class NewTagPopup extends React.Component {
  constructor(props) {
    super(props)
    const { name, } = this.props

    this.state = { name, isNameExist: false, }
  }

  handleChangeText = (name) => {
    const { tagsList, } = this.props

    const isNameExist = tagsList.indexOf(name.replace(/^\s+|\s+$/g, '')) >= 0
    this.setState({ name, isNameExist, })
  }

  addNewTag = () => {
    const { name, isNameExist, } = this.state
    const { addTag, closePopup, } = this.props

    const preparedTagName = name.replace(/^\s+|\s+$/g, '')

    if (!isNameExist && preparedTagName) {
      addTag(preparedTagName)
      closePopup('')
    } else if (!preparedTagName) {
      this.setState({ name: '', })
    }
  }

  render() {
    const { name, isNameExist, } = this.state
    const { closePopup, } = this.props

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.popupForm}>
          <Text style={styles.headline}>NEW TAG</Text>
          <TextInput
            style={styles.inputStyle}
            value={name}
            placeholder='Tag name...'
            placeholderTextColor='white'
            autoCorrect={false}
            clearButtonMode='always'
            underlineColorAndroid='transparent'
            autoCapitalize='words'
            autoFocus
            onChangeText={this.handleChangeText}
          />
          {isNameExist && (
            <Text style={styles.alert}>This tag name already exists.</Text>
          )}
          <TouchableButton style={styles.createBtn} onPress={this.addNewTag}>
            <Text style={styles.createBtnText}>CREATE TAG</Text>
          </TouchableButton>
          <TouchableButton style={styles.closeBtn} onPress={closePopup}>
            <Icon name='times' color='#C8C8C8' />
          </TouchableButton>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export { NewTagPopup, }
