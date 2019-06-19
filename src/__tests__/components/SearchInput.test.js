import React from 'react'
import { shallow, } from 'enzyme'
import { SearchInput, } from '../../components'

describe('check SearchInput component', () => {
  const onChange = jest.fn()
  const clearInput = jest.fn()
  const props = {
    onChange,
    clearInput,
    placeholder: 'Add something...',
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<SearchInput {...props} />)
    instance = wrapper.instance()
  })

  test('should pass the placeholder from props', () => {
    const input = wrapper.find('TextInput')
    expect(input.props().placeholder).toEqual(props.placeholder)
  })

  // test('should update the state when TextInput on focus or not', () => {
  //   const spy = jest.spyOn(instance, 'handleInputFocus')

  //   instance.forceUpdate()
  //   wrapper.find('TextInput').simulate('focus')

  //   expect(spy).toHaveBeenCalledTimes(1)
  // })
})
