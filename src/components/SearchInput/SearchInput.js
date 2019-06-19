import React, { Component, } from 'react'
import { TextInput, View, } from 'react-native'
import { TouchableButton, Icon, } from '../index'
import styles from './style'

class SearchInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: false,
      queryString: '',
    }
  }

  handleInputFocus = () => this.setState({ isFocused: true, })

  handleInputEdit = () => this.setState({ isFocused: false, })

  handleSubmitEditing = () => {
    const { onChange, } = this.props
    const { queryString, } = this.state

    if (queryString) {
      onChange(queryString.replace(/^\s+|\s+$/g, ''))
    }
  }

  handleChangeText = (text) => {
    const { onChange, } = this.props

    this.setState({ queryString: text, })
    onChange(text.replace(/^\s+|\s+$/g, ''))
  }

  clearInput = () => {
    const { onChange, } = this.props

    this.setState({ queryString: '', })
    onChange('')
  }

  componentDidUpdate = () => {
    const { clearInput, } = this.props

    if (clearInput) {
      this.clearInput()
    }
  }

  render() {
    const { placeholder, } = this.props
    const { queryString, isFocused, } = this.state

    return (
      <View style={styles.searchContainer}>
        <TextInput
          value={queryString}
          placeholder={placeholder}
          placeholderTextColor='white'
          onFocus={this.handleInputFocus}
          onEndEditing={this.handleInputEdit}
          style={[styles.inputStyle, isFocused && styles.focusedInput]}
          autoCorrect={false}
          clearButtonMode='always'
          underlineColorAndroid='transparent'
          autoCapitalize='words'
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
        {!!queryString && (
          <TouchableButton style={styles.closeBtn} onPress={this.clearInput}>
            <Icon name='times' color='#ADB5BD' />
          </TouchableButton>
        )}
      </View>
    )
  }
}

export { SearchInput, }
