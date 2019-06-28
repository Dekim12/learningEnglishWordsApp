import React from 'react'
import { shallow, } from 'enzyme'
import { NewTagPopup, } from '../../components'

describe('check NewTagPopup component', () => {
  const closePopup = jest.fn()
  const addTag = jest.fn()
  const newTagName = 'superTag'
  const existedTagName = 'myTag'
  const props = {
    name: 'newTag',
    tagsList: ['firstTag', 'myTag', 'nouns'],
    closePopup,
    addTag,
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<NewTagPopup {...props} />)
    instance = wrapper.instance()
  })

  afterEach(() => {
    closePopup.mockClear()
    addTag.mockClear()
  })

  test('should set the state after a constructor', () => {
    const state = wrapper.state()
    expect(state.name).toEqual(props.name)
    expect(state.isNameExist).toBeFalsy()
  })

  test('should handle entering a new tag name', () => {
    const spy = jest.spyOn(instance, 'handleChangeText')
    instance.forceUpdate()

    wrapper.find('TextInput').simulate('ChangeText', newTagName)

    expect(wrapper.state().name).toEqual(newTagName)
    expect(wrapper.state().isNameExist).toBeFalsy()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(newTagName)

    wrapper.find('TextInput').simulate('ChangeText', existedTagName)

    expect(wrapper.state().isNameExist).toBeTruthy()
  })

  test('should add a new tag', () => {
    const spy = jest.spyOn(instance, 'addNewTag')
    instance.forceUpdate()

    wrapper.find('TextInput').simulate('ChangeText', newTagName)
    wrapper
      .find('TouchableButton')
      .at(0)
      .simulate('press')

    expect(spy).toHaveBeenCalledTimes(1)
    expect(addTag).toHaveBeenCalledWith(newTagName)
    expect(closePopup).toHaveBeenCalledTimes(1)
  })

  test('should not add an existing tag', () => {
    const spy = jest.spyOn(instance, 'addNewTag')
    instance.forceUpdate()

    wrapper.find('TextInput').simulate('ChangeText', existedTagName)
    wrapper
      .find('TouchableButton')
      .at(0)
      .simulate('press')

    expect(spy).toHaveBeenCalledTimes(1)
    expect(addTag).not.toHaveBeenCalled()
    expect(closePopup).not.toHaveBeenCalled()
  })

  test('should not add an incorrect tag name', () => {
    const spy = jest.spyOn(instance, 'addNewTag')
    instance.forceUpdate()

    wrapper.find('TextInput').simulate('ChangeText', '         ')
    wrapper
      .find('TouchableButton')
      .at(0)
      .simulate('press')

    expect(spy).toHaveBeenCalledTimes(1)
    expect(addTag).not.toHaveBeenCalled()
    expect(closePopup).not.toHaveBeenCalled()
    expect(wrapper.state().name).toEqual('')
  })

  test('should show an alert when the user entered an existing tag', () => {
    expect(wrapper.state().isNameExist).toBeFalsy()
    expect(wrapper.exists({ testID: 'tag-alert', })).toBeFalsy()

    wrapper.find('TextInput').simulate('ChangeText', existedTagName)

    expect(wrapper.state().isNameExist).toBeTruthy()
    expect(wrapper.exists({ testID: 'tag-alert', })).toBeTruthy()
  })
})
