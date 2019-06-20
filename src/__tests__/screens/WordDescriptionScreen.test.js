import React from 'react'
import { shallow, } from 'enzyme'
import { WordDescriptionScreen, } from '../../screens/WordDescriptionScreen/WordDescriptionScreen'

describe('check WordDescriptionScreen', () => {
  const changeScreen = jest.fn()
  const deleteWord = jest.fn()
  const props = {
    componentId: 1233,
    changeScreen,
    deleteWord,
    wordData: {
      id: 1,
      word: 'home',
      transcription: 'hoʊm',
      translation: ['дом', 'жилище'],
      url: 'http://lokhousing.com/wp-content/uploads/2019/03/Home-1-.jpeg',
      examples: ['Daddy went home to sleep'],
      tagName: 'myTagList',
    },
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

  test('should show loading indicator before an image will not load', () => {
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
