import React from 'react'
import { shallow, } from 'enzyme'
import { WordList, } from '../../components'
import { WORDS_MOCK_LIST, } from '../mock'

describe('check WordList component', () => {
  const nonexistentWord = 'hello'
  const addNewWord = jest.fn()
  const props = {
    wordsList: WORDS_MOCK_LIST,
    openDescription: jest.fn(),
    deleteWord: jest.fn(),
    setPermission: jest.fn(),
    addNewWord,
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<WordList {...props} />)
    instance = wrapper.instance()
  })

  test('should render right word items', () => {
    instance.renderItems = jest.fn()
    const keyExtractor = jest.spyOn(instance, 'keyExtractor')
    instance.forceUpdate()

    wrapper.find('FlatList').render()

    expect(instance.renderItems).toHaveBeenCalledTimes(props.wordsList.length)
    expect(keyExtractor).toHaveBeenCalledTimes(props.wordsList.length)

    const callResults = instance.renderItems.mock.calls.map(
      argsArr => argsArr[0].item
    )
    expect(callResults).toEqual(props.wordsList)
  })

  test('should update the search string in the state', () => {
    expect(wrapper.state().searchString).toEqual('')

    instance.updateSearchString(nonexistentWord)

    expect(wrapper.state().searchString).toEqual(nonexistentWord)
  })

  test('should render button for adding a new word', () => {
    expect(wrapper.exists('TouchableButton')).toBeFalsy()

    instance.updateSearchString(nonexistentWord)

    expect(wrapper.exists('TouchableButton')).toBeTruthy()
  })

  test('should add a new word', () => {
    const addWordFunction = jest.spyOn(instance, 'addWord')
    instance.forceUpdate()
    instance.updateSearchString(nonexistentWord)

    wrapper
      .find('TouchableButton')
      .at(0)
      .simulate('press')

    expect(addWordFunction).toHaveBeenCalled()
    expect(addNewWord).toHaveBeenCalledWith(nonexistentWord)
  })
})
