import React from 'react'
import { shallow, } from 'enzyme'
import { EditTagScreen, } from '../../screens/EditTagScreen/EditTagScreen'
import { MOCK_WORDS_FOR_TAG, MOCK_TAG_LIST, COMPONENT_ID, } from '../mock'

describe('check EditTagScreen', () => {
  const changeScreen = jest.fn()
  const editCurrentTag = jest.fn()
  const deleteCurrentTag = jest.fn()
  const props = {
    componentId: COMPONENT_ID,
    id: 1,
    tagWords: MOCK_WORDS_FOR_TAG,
    tagName: 'myTagList',
    tagsList: MOCK_TAG_LIST,
    deleteCurrentTag,
    editCurrentTag,
    changeScreen,
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<EditTagScreen {...props} />)
    instance = wrapper.instance()
  })

  test('should initialize the state correctly', () => {
    const state = wrapper.state()

    expect(state.currentName).toEqual(props.tagName)
    expect(state.wordsList).toEqual(props.tagWords)
  })

  test('should handle changes a tag name, submit and show an alert', () => {
    const correctNewName = 'newTag'
    const incorrectNewName = 'fruits'
    const handleSpy = jest.spyOn(instance, 'handleChangeText')
    instance.forceUpdate()

    const input = wrapper.find('TextInput')
    input.simulate('ChangeText', correctNewName)
    input.simulate('SubmitEditing')

    expect(handleSpy).toHaveBeenCalledWith(correctNewName)
    expect(wrapper.state().changeInputQuery).toEqual(correctNewName)
    expect(wrapper.exists({ testID: 'existed-tag-alert', })).toBeFalsy()
    expect(wrapper.state().currentName).toEqual(correctNewName)

    input.simulate('ChangeText', incorrectNewName)
    input.simulate('SubmitEditing')

    expect(handleSpy).toHaveBeenLastCalledWith(incorrectNewName)
    expect(wrapper.state().changeInputQuery).toEqual(incorrectNewName)
    expect(wrapper.exists({ testID: 'existed-tag-alert', })).toBeTruthy()
    expect(wrapper.state().currentName).toEqual(correctNewName)
  })

  test('should generate words list', () => {
    const generateSpy = jest.spyOn(instance, 'generateWordsList')
    instance.forceUpdate()

    expect(generateSpy).toHaveBeenCalledWith(props.tagWords)
    expect(wrapper.find({ testID: 'tag-word-item', }).length).toEqual(
      props.tagWords.length
    )
  })

  test('should delete a word', () => {
    const deleteWordSpy = jest.spyOn(instance, 'deleteWord')
    instance.forceUpdate()

    const wordItem = wrapper.find({ testID: 'tag-word-item', }).first()
    wordItem.find('TouchableButton').simulate('press')

    expect(deleteWordSpy).toHaveBeenCalledWith(props.tagWords[0].id)
    expect(wrapper.state().deletedWordsList).toContain(props.tagWords[0].id)
    expect(wrapper.state().wordsList).not.toContain(props.tagWords[0])
  })

  test('should edit a word', () => {
    const editSpy = jest.spyOn(instance, 'edit')
    instance.forceUpdate()

    wrapper.find({ testID: 'edit-tag-btn', }).simulate('press')

    expect(editSpy).toHaveBeenCalled()
    expect(editCurrentTag).toHaveBeenCalled()
    expect(changeScreen).toHaveBeenCalledWith('goBack', props.componentId)
    editCurrentTag.mockClear()

    wrapper.setState({ currentName: '', })
    wrapper.find({ testID: 'edit-tag-btn', }).simulate('press')
    expect(editCurrentTag).not.toHaveBeenCalled()
    expect(changeScreen).toHaveBeenCalledTimes(2)
  })

  test('should delete the tag and show a permission popup', () => {
    const deleteTagSpy = jest.spyOn(instance, 'deleteTag')
    instance.forceUpdate()

    expect(wrapper.exists('PermissionPopup')).toBeFalsy()

    wrapper.find({ testID: 'delete-tag-btn', }).simulate('press')
    expect(wrapper.exists('PermissionPopup')).toBeTruthy()

    wrapper.find('PermissionPopup').invoke('resolve')()

    expect(deleteTagSpy).toHaveBeenCalled()
    expect(deleteCurrentTag).toHaveBeenCalled()
    expect(changeScreen).toHaveBeenCalledWith('goBack', props.componentId)

    wrapper.find('PermissionPopup').invoke('refresh')()
    expect(wrapper.exists('PermissionPopup')).toBeFalsy()
  })
})
