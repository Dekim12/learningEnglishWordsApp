// @flow

import React, { Component, } from 'react'
import { TextInput, } from 'react-native'

type Props = {
  onSubmit: (value: string, type: string) => void,
  type: string,
  submit: boolean,
  placeholder: string,
  style: mixed
}

type State = {
  text: string
}

class Input extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      text: '',
    }
  }

  handleSubmitEditing = (): void => {
    const { onSubmit, type, } = this.props
    const { text, } = this.state

    if (text) {
      onSubmit(text.replace(/^\s+|\s+$/g, ''), type)
      this.setState({ text: '', })
    }
  }

  handleChangeText = (text: string): void => {
    this.setState({ text, })
  }

  componentDidUpdate = () => {
    const { submit, } = this.props

    if (submit) {
      this.handleSubmitEditing()
    }
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
