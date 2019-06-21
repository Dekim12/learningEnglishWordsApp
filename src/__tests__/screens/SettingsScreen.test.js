import React from 'react'
import { shallow, } from 'enzyme'
import { SettingsScreen, } from '../../screens/SettingsScreen/SettingsScreen'
import { fakeData, } from '../../constants'

describe('check SettingsScreen', () => {
  const changeScreen = jest.fn()
  const setSettings = jest.fn()
  const props = {
    componentId: 1233,
    amountOfWords: 5,
    allTags: false,
    isRandom: false,
    tagsList: [
      '112',
      'firstTag',
      'fruits',
      'myTagList',
      'peoples',
      'secondTag'
    ],
    tagsForTask: ['112', 'myTagList'],
    wordsList: fakeData,
    setSettings,
    changeScreen,
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<SettingsScreen {...props} />)
    instance = wrapper.instance()
  })

  test('should initialize the state correctly', () => {
    const state = wrapper.state()

    expect(state.tagsForTask).toEqual(props.tagsForTask)
    expect(state.isRandom).toEqual(props.isRandom)
    expect(state.useAllTags).toEqual(props.allTags)
    expect(instance.newWordsAmount).toEqual(props.amountOfWords)
  })

  test('should handle user text correctly and show permission', () => {
    const correctInput = '8'
    const incorrectInput = '12aa'
    const handleText = jest.spyOn(instance, 'handleChangeText')
    instance.forceUpdate()

    wrapper.find('TextInput').simulate('ChangeText', correctInput)

    expect(wrapper.exists({ testID: 'words-amount-alert', })).toBeFalsy()
    expect(handleText).toHaveBeenCalledWith(correctInput)
    expect(instance.newWordsAmount).toEqual(8)

    wrapper.find('TextInput').simulate('ChangeText', incorrectInput)

    expect(wrapper.exists({ testID: 'words-amount-alert', })).toBeTruthy()
    expect(handleText).toHaveBeenCalledWith(incorrectInput)
    expect(instance.newWordsAmount).toEqual(8)
    expect(wrapper.state('isAmountCorrect')).toBeFalsy()

    wrapper.find('TextInput').simulate('ChangeText', correctInput)

    expect(wrapper.exists({ testID: 'words-amount-alert', })).toBeFalsy()
    expect(wrapper.state('isAmountCorrect')).toBeTruthy()
  })

  test('should select all tags', () => {
    const handler = jest.spyOn(instance, 'handlerAllTaskButton')
    instance.forceUpdate()

    wrapper.find({ testID: 'all-tags-btn', }).simulate('press')

    expect(handler).toHaveBeenCalledTimes(1)
    expect(wrapper.state().tagsForTask).toEqual(props.tagsList)
    expect(wrapper.state().useAllTags).toBeTruthy()

    wrapper.find({ testID: 'all-tags-btn', }).simulate('press')

    expect(handler).toHaveBeenCalledTimes(2)
    expect(wrapper.state().tagsForTask).toEqual([])
    expect(wrapper.state().useAllTags).toBeFalsy()
  })

  test('should generate tags items', () => {
    const spy = jest.spyOn(instance, 'generateTagsItems')
    instance.forceUpdate()

    wrapper.find({ testID: 'all-tags-btn', }).simulate('press')

    expect(spy).toHaveBeenCalledWith(props.tagsList)
    expect(wrapper.find({ testID: 'tag-btn', }).length).toBe(
      props.tagsList.length
    )
  })

  test('should select and cancel a tag', () => {
    const toggleSpy = jest.spyOn(instance, 'toggleTag')
    instance.forceUpdate()

    const btn = wrapper.find({ testID: 'tag-btn', }).last()
    const btnTagName = btn
      .childAt(0)
      .render()
      .text()

    expect(wrapper.state().tagsForTask).not.toContainEqual(btnTagName)

    btn.simulate('press')

    expect(toggleSpy).toHaveBeenCalledWith(btnTagName)
    expect(wrapper.state().tagsForTask).toContainEqual(btnTagName)

    btn.simulate('press')

    expect(toggleSpy).toHaveBeenCalledWith(btnTagName)
    expect(wrapper.state().tagsForTask).not.toContainEqual(btnTagName)
  })

  test('should handle random', () => {
    const handleSpy = jest.spyOn(instance, 'handleRandom')
    instance.forceUpdate()
    const addRandom = wrapper.find({ testID: 'add-random-btn', })
    const cancelRandom = wrapper.find({ testID: 'cancel-random-btn', })

    cancelRandom.simulate('press')
    expect(handleSpy).not.toHaveBeenCalled()

    addRandom.simulate('press')
    expect(handleSpy).toHaveBeenCalled()
    expect(wrapper.state('isRandom')).toBeTruthy()

    wrapper.find({ testID: 'cancel-random-btn', }).simulate('press')
    expect(handleSpy).toHaveBeenCalled()
    expect(wrapper.state('isRandom')).toBeFalsy()
  })

  test('should show alert wen total amount of words will be 0', () => {
    expect(instance.defineTotalAmountOfWords()).toBe(7)
    expect(wrapper.exists({ testID: 'tags-alert', })).toBeFalsy()

    wrapper.setState({ tagsForTask: [], })

    expect(instance.defineTotalAmountOfWords()).toBe(0)
    expect(wrapper.exists({ testID: 'tags-alert', })).toBeTruthy()
  })

  test('should confirm settings or not', () => {
    const confirmSpy = jest.spyOn(instance, 'confirmSettings')
    instance.forceUpdate()
    const confirmBtn = wrapper.find({ testID: 'confirm-btn', })
    const state = wrapper.state()
    const settingsObj = {
      tagsForTask: state.tagsForTask,
      allTags: state.useAllTags,
      random: state.isRandom,
      amountOfWords: instance.newWordsAmount,
    }

    confirmBtn.simulate('press')
    expect(confirmSpy).toHaveBeenCalledTimes(1)
    expect(setSettings).toHaveBeenCalledWith(settingsObj)
    expect(changeScreen).toHaveBeenCalledWith('goBack', props.componentId)
    setSettings.mockClear()
    changeScreen.mockClear()

    wrapper.setState({ isAmountCorrect: false, })
    confirmBtn.simulate('press')
    expect(confirmSpy).toHaveBeenCalledTimes(2)
    expect(setSettings).not.toHaveBeenCalled()
    expect(changeScreen).not.toHaveBeenCalled()

    wrapper.setState({ isAmountCorrect: true, tagsForTask: [], })
    confirmBtn.simulate('press')
    expect(confirmSpy).toHaveBeenCalledTimes(3)
    expect(setSettings).not.toHaveBeenCalled()
    expect(changeScreen).not.toHaveBeenCalled()
  })
})
