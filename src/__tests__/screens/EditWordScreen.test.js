import React from 'react'
import { shallow, } from 'enzyme'
import { EditWordScreen, } from '../../screens/EditWordScreen/EditWordScreen'

const wordData = {
  id: 1,
  word: 'home',
  transcription: 'hoʊm',
  translation: ['дом', 'жилище'],
  url: 'http://lokhousing.com/wp-content/uploads/2019/03/Home-1-.jpeg',
  examples: ['Daddy went home to sleep'],
  tagName: 'myTagList',
}

describe('check EditWordScreen', () => {
  const translationType = 'translationWord'
  const exampleType = 'exampleString'
  const urlType = 'urlString'
  const tagType = 'tagString'

  const changeScreen = jest.fn()
  const editWord = jest.fn()
  const props = {
    componentId: 1233,
    id: 1,
    tagsList: ['112', 'firstTag', 'fruits', 'myTagList'],
    wordData,
    editWord,
    changeScreen,
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<EditWordScreen {...props} />)
    instance = wrapper.instance()
  })

  test('should initialize the state correctly', () => {
    const { submit, ...stateData } = wrapper.state()

    expect(stateData).toEqual(wordData)
  })

  test('should generate translation and example items', () => {
    const generateSpy = jest.spyOn(instance, 'generateItem')
    instance.forceUpdate()

    expect(generateSpy).toHaveBeenCalledTimes(2)
    expect(generateSpy).toHaveBeenCalledWith(
      wordData.translation,
      translationType
    )
    expect(generateSpy).toHaveBeenLastCalledWith(wordData.examples, exampleType)
    expect(wrapper.find({ testID: 'example-item', }).length).toEqual(
      wordData.examples.length
    )
    expect(wrapper.find({ testID: 'translation-item', }).length).toEqual(
      wordData.translation.length
    )
  })

  test('should delete translation or example item', () => {
    const deleteSpy = jest.spyOn(instance, 'deleteWordOrExample')
    instance.forceUpdate()

    wrapper
      .find({ testID: 'example-item', })
      .first()
      .find('TouchableButton')
      .simulate('press')

    expect(deleteSpy).toHaveBeenCalledWith(wordData.examples[0], exampleType)
    expect(wrapper.state().examples).not.toContain(wordData.examples[0])

    wrapper
      .find({ testID: 'translation-item', })
      .first()
      .find('TouchableButton')
      .simulate('press')

    expect(deleteSpy).toHaveBeenLastCalledWith(
      wordData.translation[0],
      translationType
    )
    expect(wrapper.state().translation).not.toContain(wordData.examples[0])
  })

  test('should add translation or example', () => {
    const addSpy = jest.spyOn(instance, 'addWordOrExample')
    instance.forceUpdate()

    const inputForTranslation = wrapper.find('Input').at(0)
    inputForTranslation.invoke('onSubmit')('домик', translationType)

    expect(addSpy).toHaveBeenCalledWith('домик', translationType)
    expect(wrapper.state().translation).toContain('домик')

    const inputForExample = wrapper.find('Input').at(2)
    inputForExample.invoke('onSubmit')('I go home', exampleType)

    expect(addSpy).toHaveBeenLastCalledWith('I go home', exampleType)
    expect(wrapper.state().examples).toContain('I go home')
  })

  test('should generate tag items', () => {
    const generateTags = jest.spyOn(instance, 'generateTags')
    instance.forceUpdate()

    expect(generateTags).toHaveBeenCalledWith(wordData.tagName, props.tagsList)
    expect(wrapper.find({ testID: 'tag-item', }).length).toEqual(
      props.tagsList.length
    )
  })

  test('should add a new url', () => {
    const addUrlSpy = jest.spyOn(instance, 'addTagOrUrl')
    instance.forceUpdate()

    const inputForUrl = wrapper.find('Input').at(1)
    inputForUrl.invoke('onSubmit')('https://', urlType)

    expect(addUrlSpy).toHaveBeenCalledWith('https://', urlType)
    expect(wrapper.state().url).toContain('https://')
  })

  test('should change a tag of the word', () => {
    const addTagSpy = jest.spyOn(instance, 'addTagOrUrl')
    instance.forceUpdate()

    const tagItem = wrapper.find({ testID: 'tag-item', }).first()
    const newNameTagOfWord = tagItem
      .find('Text')
      .render()
      .text()
    tagItem.simulate('press')

    expect(newNameTagOfWord).toEqual(props.tagsList[0])
    expect(addTagSpy).toHaveBeenCalledWith(props.tagsList[0], tagType)
    expect(wrapper.state().tagName).toContain(props.tagsList[0])
  })

  test('should edit the word data', () => {
    const editSpy = jest.spyOn(instance, 'edit')
    instance.forceUpdate()

    wrapper.find({ testID: 'edit-word-btn', }).simulate('press')

    expect(editSpy).toHaveBeenCalled()
    expect(editWord).toHaveBeenCalled()
    expect(changeScreen).toHaveBeenCalledWith('goBack', props.componentId)
  })
})
