import React from 'react'
import { shallow, } from 'enzyme'
import { TagDetailsScreen, } from '../../screens/TagDetailsScreen/TagDetailsScreen'
import { MOCK_WORDS_FOR_TAG, COMPONENT_ID, } from '../mock'

describe('check TagDetailsScreen', () => {
  const changeScreen = jest.fn()
  const props = {
    componentId: COMPONENT_ID,
    tagName: 'myTagList',
    changeScreen,
    deleteWord: jest.fn(),
    tagsWordsList: MOCK_WORDS_FOR_TAG,
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

    expect(instance.renderWords).toHaveBeenCalledTimes(
      props.tagsWordsList.length
    )
    expect(keyExtractor).toHaveBeenCalledTimes(props.tagsWordsList.length)
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
