import React from 'react'
import { shallow, } from 'enzyme'
import { WordList, } from '../../components'

const wordsList = [
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
    tagName: 'secondTag',
  },
  {
    id: 3,
    word: 'fish',
    transcription: 'fɪʃ',
    translation: ['рыба'],
    url:
      'https://www.fishkeepingworld.com/wp-content/uploads/2018/06/Clownfish.png',
    examples: ['Did you catch any fish?'],
    tagName: 'secondTag',
  }
]

describe('check WordList component', () => {
  const nonexistentWord = 'hello'
  const addNewWord = jest.fn()
  const props = {
    wordsList,
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

    expect(instance.renderItems).toHaveBeenCalledTimes(3)
    expect(keyExtractor).toHaveBeenCalledTimes(3)

    const callResults = instance.renderItems.mock.calls.map(
      argsArr => argsArr[0].item
    )
    expect(callResults).toEqual(wordsList)
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
