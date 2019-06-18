import React from 'react'
import sinon from 'sinon'
import { TextInput, } from 'react-native'
import { shallow, } from 'enzyme'
import { EDIT_TYPES, } from '../../constants'
import { Input, } from '../../components'

describe('check Input component', () => {
  const props = {
    type: EDIT_TYPES.word,
    onSubmit: jest.fn(),
    submit: false,
    style: { color: 'red', },
    placeholder: 'Add translation...',
  }

  const wrapper = shallow(<Input {...props} />)
  const instance = wrapper.instance()

  // console.log(instance)

  // test('should pass the placeholder from props', () => {
  //   expect(wrapper.find(TextInput).props().placeholder).toBe(
  //     'Add translation...'
  //   )
  // })

  test('should handle user input', () => {
    const newF = sinon.spy('handleChangeText')
    const wrapper = shallow(<Input {...props} />)
    wrapper.find('TextInput').simulate('ChangeText', 'hello')

    expect(newF.calledOnce).toBe(1)
  })

  // test('should handle user text and enter it to state', () => {
  //   wrapper.simulate('ChangeText', 'hello')
  //   expect(wrapper.state('text')).toEqual('hello')
  // })
})
