import React from 'react'
import { shallow, } from 'enzyme'
import { WordDescriptionScreen, } from '../../screens/WordDescriptionScreen/WordDescriptionScreen'
import { WORDS_MOCK_LIST, COMPONENT_ID, } from '../mock'

describe('check WordDescriptionScreen', () => {
  const changeScreen = jest.fn()
  const deleteWord = jest.fn()
  const props = {
    componentId: COMPONENT_ID,
    changeScreen,
    deleteWord,
    wordData: WORDS_MOCK_LIST[0],
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<WordDescriptionScreen {...props} />)
    instance = wrapper.instance()
  })

  afterEach(() => {
    changeScreen.mockClear()
  })

  test('should render examples', () => {
    const spy = jest.spyOn(instance, 'renderExamples')
    instance.forceUpdate()

    expect(spy).toHaveBeenCalledWith(props.wordData.examples)
  })

  test('should display an ActivityIndicator while loading image', () => {
    const spy = jest.spyOn(instance, 'handleLoad')
    instance.forceUpdate()

    expect(wrapper.state().loading).toBeTruthy()
    expect(wrapper.exists('ActivityIndicator')).toBeTruthy()

    wrapper.find('FastImage').simulate('Load')
    expect(spy).toHaveBeenCalled()
    expect(wrapper.state().loading).toBeFalsy()
    expect(wrapper.exists('ActivityIndicator')).toBeFalsy()
  })

  test('should show and hide the permission popup', () => {
    const spy = jest.spyOn(instance, 'handlePermission')
    instance.forceUpdate()

    expect(wrapper.exists('PermissionPopup')).toBeFalsy()

    wrapper
      .find('TouchableButton')
      .at(0)
      .simulate('press')

    expect(wrapper.exists('PermissionPopup')).toBeTruthy()
    expect(spy).toHaveBeenCalled()

    instance.refreshPermission()

    expect(wrapper.exists('PermissionPopup')).toBeFalsy()
  })

  test('should delete current word', () => {
    instance.deleteCurrentWord()

    expect(deleteWord).toHaveBeenCalledWith(props.wordData.id)
    expect(changeScreen).toHaveBeenCalledWith('goBack', props.componentId)
  })

  test('should edit current word', () => {
    const spy = jest.spyOn(instance, 'toEditWordScreen')
    instance.forceUpdate()

    wrapper
      .find('TouchableButton')
      .at(1)
      .simulate('press')

    expect(spy).toHaveBeenCalled()
    expect(changeScreen).toHaveBeenCalledWith(
      'toEditWord',
      props.componentId,
      props.wordData.id
    )
  })
})
