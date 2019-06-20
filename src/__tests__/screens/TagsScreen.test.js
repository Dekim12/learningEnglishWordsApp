import React from 'react'
import { shallow, } from 'enzyme'
import { TagsScreen, } from '../../screens/TagsScreen/TagsScreen'

describe('check TagsScreen', () => {
  const changeScreen = jest.fn()
  const props = {
    componentId: 1233,
    tagsList: ['firstTag', 'nouns', 'myTag'],
    changeScreen,
    addTag: jest.fn(),
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<TagsScreen {...props} />)
    instance = wrapper.instance()
  })

  afterEach(() => {
    changeScreen.mockClear()
  })

  test('should open and close new tag popup', () => {
    const spy = jest.spyOn(instance, 'openPopup')
    instance.forceUpdate()

    expect(wrapper.exists('NewTagPopup')).toBeFalsy()
    expect(wrapper.state().newTagName).toEqual('')

    instance.togglePopup('newTag')
    expect(wrapper.exists('NewTagPopup')).toBeTruthy()
    expect(wrapper.state().newTagName).toEqual('newTag')

    instance.togglePopup('newTag')
    expect(wrapper.exists('NewTagPopup')).toBeFalsy()

    wrapper.find('TouchableButton').simulate('press')

    expect(spy).toHaveBeenCalledTimes(1)
    expect(wrapper.exists('NewTagPopup')).toBeTruthy()
    expect(wrapper.state().newTagName).toEqual('')
  })

  test('should open the tag details screen', () => {
    instance.toDetails('firstTag')

    expect(changeScreen).toHaveBeenCalledWith(
      'toTagDetails',
      props.componentId,
      'firstTag'
    )
  })

  test('should open the tag edit screen', () => {
    instance.toEdit('firstTag')

    expect(changeScreen).toHaveBeenCalledWith(
      'toEditTag',
      props.componentId,
      'firstTag'
    )
  })
})
