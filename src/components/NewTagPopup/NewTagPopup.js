import React from 'react'
import { View, Text, TextInput, } from 'react-native'
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

    const isNameExist = tagsList.indexOf(name.replace(/^\s+/g, '')) >= 0
    this.setState({ name, isNameExist, })
  }

  addNewTag = () => {
    const { name, isNameExist, } = this.state
    const { addTag, closePopup, } = this.props

    const preparedTagName = name.replace(/^\s+/g, '')
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
    const {
      container,
      popupForm,
      headline,
      createBtn,
      createBtnText,
      inputStyle,
      closeBtn,
      alert,
    } = styles

    return (
      <View style={container}>
        <View style={popupForm}>
          <Text style={headline}>NEW TAG</Text>
          <TextInput
            style={inputStyle}
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
            <Text style={alert}>This tag name already exists.</Text>
          )}
          <TouchableButton style={createBtn} onPress={this.addNewTag}>
            <Text style={createBtnText}>CREATE TAG</Text>
          </TouchableButton>
          <TouchableButton style={closeBtn} onPress={() => closePopup('')}>
            <Icon name='times' size={40} color='#C8C8C8' />
          </TouchableButton>
        </View>
      </View>
    )
  }
}

export { NewTagPopup, }
