import React, { Component, } from 'react'
import { TextInput, } from 'react-native'

class Input extends Component {
  state = {
    text: '',
  }

  handleSubmitEditing = () => {
    const { onSubmit, } = this.props
    const { text, } = this.state

    if (text) {
      onSubmit(text)
      this.setState({ text: '', })
    }
  }

  handleChangeText = (text) => {
    this.setState({ text, })
  }

  render() {
    const { placeholder, style, } = this.props
    const { text, } = this.state

    return (
      <TextInput
        value={text}
        placeholder={placeholder}
        placeholderTextColor='white'
        style={style}
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

export { Input, }
