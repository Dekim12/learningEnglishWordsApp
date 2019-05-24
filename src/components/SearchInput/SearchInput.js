import React, { Component, } from 'react'
import { TextInput, } from 'react-native'
import styles from './style'

class SearchInput extends Component {
  state = {
    text: '',
    isFocused: false,
  }

  handleInputFocus = () => this.setState({ isFocused: true, })

  handleInputEdit = () => this.setState({ isFocused: false, })

  handleSubmitEditing = () => {
    const { onSubmit, type, } = this.props
    const { text, } = this.state

    if (text) {
      onSubmit(text.replace(/^\s+/g, ''), type)
      this.setState({ text: '', })
    }
  }

  handleChangeText = (text) => {
    this.setState({ text, })
  }

  render() {
    const { placeholder, } = this.props
    const { text, isFocused, } = this.state

    return (
      <TextInput
        value={text}
        placeholder={placeholder}
        placeholderTextColor='white'
        onFocus={this.handleInputFocus}
        onEndEditing={this.handleInputEdit}
        style={[
          styles.inputStyle,
          isFocused ? { backgroundColor: '#d4d0e2', } : {}
        ]}
        autoCorrect={false}
        clearButtonMode='always'
        underlineColorAndroid='transparent'
        autoCapitalize='words'
        onChangeText={this.handleChangeText}
        onSubmitEditing={this.handleSubmitEditing}
      />
    )
  }
}

export { SearchInput, }
