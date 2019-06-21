import React from 'react'
import { shallow, } from 'enzyme'
import { SearchInput, } from '../../components'

describe('check SearchInput component', () => {
  const onChange = jest.fn()
  const props = {
    onChange,
    clearInput: false,
    placeholder: 'Add something...',
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<SearchInput {...props} />)
    instance = wrapper.instance()
  })

  test('should update the state when TextInput on focus or not', () => {
    const focusSpy = jest.spyOn(instance, 'handleInputFocus')
    const editSpy = jest.spyOn(instance, 'handleInputEdit')
    instance.forceUpdate()

    wrapper.find('TextInput').simulate('focus')

    expect(focusSpy).toHaveBeenCalled()
    expect(wrapper.state('isFocused')).toBeTruthy()

    wrapper.find('TextInput').simulate('EndEditing')

    expect(editSpy).toHaveBeenCalled()
    expect(wrapper.state('isFocused')).toBeFalsy()
  })

  test('should handle user input', () => {
    const inputString = 'hello'
    const spy = jest.spyOn(instance, 'handleChangeText')
    instance.forceUpdate()

    wrapper.find('TextInput').simulate('ChangeText', inputString)

    expect(spy).toHaveBeenCalledWith(inputString)
    expect(onChange).toHaveBeenCalledWith(inputString)
    expect(wrapper.state('queryString')).toEqual(inputString)
  })

  test('should handle user submit', () => {
    const spy = jest.spyOn(instance, 'handleSubmitEditing')
    instance.forceUpdate()

    const input = wrapper.find('TextInput')

    input.simulate('ChangeText', 'hello')
    input.simulate('SubmitEditing')

    expect(spy).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalledWith('hello')
  })

  test('should display a correct placeholder', () => {
    const input = wrapper.find('TextInput')
    expect(input.props().placeholder).toEqual(props.placeholder)
  })

  test('should clear the input on pressing the clear button', () => {
    const spy = jest.spyOn(instance, 'clearInput')
    instance.forceUpdate()

    wrapper.find('TextInput').simulate('ChangeText', 'hello')
    wrapper.find('TouchableButton').simulate('press')

    expect(spy).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalledWith('')
    expect(wrapper.state('queryString')).toEqual('')
  })

  test('clears search string when correctly props have been received', () => {
    instance.clearInput = jest.fn()
    instance.forceUpdate()

    expect(instance.clearInput).not.toHaveBeenCalled()
    wrapper.setProps({ clearInput: true, })

    expect(instance.clearInput).toHaveBeenCalled()
  })
})
