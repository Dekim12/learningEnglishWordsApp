import React from 'react'
import { shallow, } from 'enzyme'
import { EDIT_TYPES, } from '../../constants'
import { Input, } from '../../components'

describe('check Input component', () => {
  const onSubmit = jest.fn()
  const props = {
    type: EDIT_TYPES.word,
    onSubmit,
    submit: false,
    style: { color: 'red', },
    placeholder: 'Add translation...',
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<Input {...props} />)
    instance = wrapper.instance()
  })

  test('should pass the placeholder from props', () => {
    expect(wrapper.props().placeholder).toBe('Add translation...')
  })

  test('should handle user input', () => {
    instance.handleChangeText = jest.fn()
    instance.forceUpdate()

    wrapper.simulate('ChangeText', 'hello')

    expect(instance.handleChangeText).toHaveBeenCalledTimes(1)
    expect(instance.handleChangeText).toHaveBeenCalledWith('hello')
  })

  test('should handle user text and enter it to state', () => {
    wrapper.simulate('ChangeText', 'hello')
    expect(wrapper.state('text')).toEqual('hello')
  })

  test('should call handleSubmitEditing and call onSubmit depending on conditions', () => {
    const spy = jest.spyOn(instance, 'handleSubmitEditing')
    instance.forceUpdate()
    wrapper.simulate('SubmitEditing')

    expect(spy).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledTimes(0)

    wrapper.simulate('ChangeText', 'hello')
    expect(wrapper.state('text')).toEqual('hello')

    wrapper.simulate('SubmitEditing')

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith('hello', props.type)
    expect(wrapper.state('text')).toEqual('')
  })

  test('should call handleSubmitEditing after componentDidUpdate', () => {
    const spy = jest.spyOn(instance, 'handleSubmitEditing')
    instance.forceUpdate()

    expect(spy).toHaveBeenCalledTimes(0)

    wrapper.setProps({ submit: true, })
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
