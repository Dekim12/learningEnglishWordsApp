import React from 'react'
import { shallow, } from 'enzyme'
import { NewTagPopup, } from '../../components'

describe('check Input component', () => {
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

  test('should handle user input a new tag name', () => {
    instance.handleChangeText = jest.spyOn(instance, 'handleChangeText')
    instance.forceUpdate()

    wrapper.find('TextInput').simulate('ChangeText', newTagName)

    expect(wrapper.state().name).toEqual(newTagName)
    expect(wrapper.state().isNameExist).toBeFalsy()
    expect(instance.handleChangeText).toHaveBeenCalledTimes(1)
    expect(instance.handleChangeText).toHaveBeenCalledWith(newTagName)

    wrapper.find('TextInput').simulate('ChangeText', existedTagName)

    expect(wrapper.state().isNameExist).toBeTruthy()
  })

  test('should add a new tag', () => {
    instance.addNewTag = jest.spyOn(instance, 'addNewTag')
    instance.forceUpdate()

    wrapper.find('TextInput').simulate('ChangeText', newTagName)
    wrapper
      .find('TouchableButton')
      .at(0)
      .simulate('press')

    expect(instance.addNewTag).toHaveBeenCalledTimes(1)
    expect(addTag).toHaveBeenCalledWith(newTagName)
    expect(closePopup).toHaveBeenCalledTimes(1)
  })

  test('should not add an existed tag', () => {
    instance.addNewTag = jest.spyOn(instance, 'addNewTag')
    instance.forceUpdate()

    wrapper.find('TextInput').simulate('ChangeText', existedTagName)
    wrapper
      .find('TouchableButton')
      .at(0)
      .simulate('press')

    expect(instance.addNewTag).toHaveBeenCalledTimes(1)
    expect(addTag).not.toHaveBeenCalled()
    expect(closePopup).not.toHaveBeenCalled()
  })

  test('should not add an incorrect tag name', () => {
    instance.addNewTag = jest.spyOn(instance, 'addNewTag')
    instance.forceUpdate()

    wrapper.find('TextInput').simulate('ChangeText', '         ')
    wrapper
      .find('TouchableButton')
      .at(0)
      .simulate('press')

    expect(instance.addNewTag).toHaveBeenCalledTimes(1)
    expect(addTag).not.toHaveBeenCalled()
    expect(closePopup).not.toHaveBeenCalled()
    expect(wrapper.state().name).toEqual('')
  })

  test('should show an alert', () => {
    expect(wrapper.state().isNameExist).toBeFalsy()
    expect(wrapper.exists({ testID: 'tag-alert', })).toBeFalsy()

    wrapper.find('TextInput').simulate('ChangeText', existedTagName)

    expect(wrapper.state().isNameExist).toBeTruthy()
    expect(wrapper.exists({ testID: 'tag-alert', })).toBeTruthy()
  })
})
