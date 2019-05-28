import React from 'react'
import { View, Text, TextInput, } from 'react-native'
import { Icon, TouchableButton, } from '../index'
import styles from './style'

class NewTagPopup extends React.Component {
  constructor(props) {
    super(props)
    const { name, } = this.props

    this.state = { name, }
  }

  handleChangeText = (name) => {
    this.setState({ name, })
  }

  addNewTag = () => {
    const { name, } = this.state
    const { addTag, closePopup, } = this.props
    addTag(name.replace(/^\s+/g, ''))
    closePopup('')
  }

  render() {
    const { name, } = this.state
    const { closePopup, } = this.props
    const {
      container,
      popupForm,
      headline,
      createBtn,
      createBtnText,
      inputStyle,
      closeBtn,
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
          <TouchableButton style={createBtn} onPress={this.addNewTag}>
            <Text style={createBtnText}>CREATE TAG</Text>
          </TouchableButton>
          <TouchableButton style={closeBtn} onPress={() => closePopup('')}>
            <Icon name='times' size={40} color='#BEBEBE' />
          </TouchableButton>
        </View>
      </View>
    )
  }
}

export { NewTagPopup, }
