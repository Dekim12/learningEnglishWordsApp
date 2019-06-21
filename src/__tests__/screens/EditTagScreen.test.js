import React from 'react'
import { shallow, } from 'enzyme'
import { EditTagScreen, } from '../../screens/EditTagScreen/EditTagScreen'

const tagWords = [
  {
    id: 1,
    word: 'home',
    transcription: 'hoʊm',
    translation: ['дом', 'жилище'],
    url: 'http://lokhousing.com/wp-content/uploads/2019/03/Home-1-.jpeg',
    examples: ['Daddy went home to sleep'],
    tagName: 'myTagList',
  },
  {
    id: 2,
    word: 'dog',
    transcription: 'dɒɡ',
    translation: ['собака', 'пес'],
    url: 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg',
    examples: ['He dogged her every move.'],
    tagName: 'myTagList',
  },
  {
    id: 3,
    word: 'fish',
    transcription: 'fɪʃ',
    translation: ['рыба', 'рыбачить'],
    url:
      'https://www.fishkeepingworld.com/wp-content/uploads/2018/06/Clownfish.png',
    examples: ['Did you catch any fish?'],
    tagName: 'myTagList',
  }
]

describe('check EditTagScreen', () => {
  const changeScreen = jest.fn()
  const editCurrentTag = jest.fn()
  const deleteCurrentTag = jest.fn()
  const props = {
    componentId: 1233,
    id: 1,
    tagWords,
    tagName: 'myTagList',
    tagsList: ['112', 'firstTag', 'fruits', 'myTagList', 'peoples'],
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
    expect(state.wordsList).toEqual(tagWords)
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

    expect(generateSpy).toHaveBeenCalledWith(tagWords)
    expect(wrapper.find({ testID: 'tag-word-item', }).length).toEqual(
      tagWords.length
    )
  })

  test('should delete a word', () => {
    const deleteWordSpy = jest.spyOn(instance, 'deleteWord')
    instance.forceUpdate()

    const wordItem = wrapper.find({ testID: 'tag-word-item', }).first()
    wordItem.find('TouchableButton').simulate('press')

    expect(deleteWordSpy).toHaveBeenCalledWith(tagWords[0].id)
    expect(wrapper.state().deletedWordsList).toContain(tagWords[0].id)
    expect(wrapper.state().wordsList).not.toContain(tagWords[0])
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
