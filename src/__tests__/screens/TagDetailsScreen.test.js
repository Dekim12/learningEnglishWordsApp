import React from 'react'
import { shallow, } from 'enzyme'
import { TagDetailsScreen, } from '../../screens/TagDetailsScreen/TagDetailsScreen'

const tagsWordsList = [
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
    translation: ['рыба'],
    url:
      'https://www.fishkeepingworld.com/wp-content/uploads/2018/06/Clownfish.png',
    examples: ['Did you catch any fish?'],
    tagName: 'myTagList',
  }
]

describe('check TagDetailsScreen', () => {
  const changeScreen = jest.fn()
  const props = {
    componentId: 1233,
    tagName: 'myTagList',
    changeScreen,
    deleteWord: jest.fn(),
    tagsWordsList,
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<TagDetailsScreen {...props} />)
    instance = wrapper.instance()
  })

  test('should render word items', () => {
    instance.renderWords = jest.fn()
    const keyExtractor = jest.spyOn(instance, 'keyExtractor')
    instance.forceUpdate()

    wrapper.find('FlatList').render()

    expect(instance.renderWords).toHaveBeenCalledTimes(3)
    expect(keyExtractor).toHaveBeenCalledTimes(3)
  })

  test('should pass to the new word screen', () => {
    wrapper.find('TouchableButton').simulate('press')

    expect(changeScreen).toHaveBeenCalledWith(
      'createNewWord',
      props.componentId
    )
  })

  test('should show or hide the permission popup', () => {
    expect(wrapper.exists('PermissionPopup')).toBeFalsy()

    instance.setPermissionFunctions()
    expect(wrapper.exists('PermissionPopup')).toBeTruthy()

    instance.refreshPermission()
    expect(wrapper.exists('PermissionPopup')).toBeFalsy()
  })
})
