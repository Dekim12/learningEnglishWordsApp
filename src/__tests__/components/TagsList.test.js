import React from 'react'
import { shallow, } from 'enzyme'
import { TagsList, } from '../../components'

describe('check TagsList component', () => {
  const nonexistentTag = 'supperTag'
  const addNewTag = jest.fn()
  const props = {
    tagsList: ['myTag', 'firstTag', 'nouns', 'verbs'],
    toEdit: jest.fn(),
    toDetails: jest.fn(),
    addNewTag,
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<TagsList {...props} />)
    instance = wrapper.instance()
  })

  test('should render right items', () => {
    instance.renderItems = jest.fn()
    const keyExtractor = jest.spyOn(instance, 'keyExtractor')
    instance.forceUpdate()

    wrapper.find('FlatList').render()

    expect(instance.renderItems).toHaveBeenCalledTimes(4)
    expect(keyExtractor).toHaveBeenCalledTimes(4)

    const callResults = instance.renderItems.mock.calls.map(
      argsArr => argsArr[0].item
    )
    expect(callResults).toEqual(props.tagsList)
  })

  test('should update the search string in the state', () => {
    expect(wrapper.state().searchString).toEqual('')

    instance.updateSearchString('newTag')

    expect(wrapper.state().searchString).toEqual('newTag')
    expect(wrapper.state().clearInput).toBeFalsy()
  })

  test('returns items filtered by a search string', () => {
    const filterFunction = jest.spyOn(instance, 'filterTagList')
    instance.forceUpdate()

    let searchString = 'TAG'
    let expectedResult = ['myTag', 'firstTag']

    expect(filterFunction(props.tagsList, searchString)).toEqual(expectedResult)

    searchString = 'S'
    expectedResult = ['firstTag', 'nouns', 'verbs']

    expect(filterFunction(props.tagsList, searchString)).toEqual(expectedResult)
  })

  test('should render button for adding a new tag', () => {
    expect(wrapper.exists('TouchableButton')).toBeFalsy()

    instance.updateSearchString(nonexistentTag)

    expect(wrapper.exists('TouchableButton')).toBeTruthy()
  })

  test('should add a new tag', () => {
    const addTagFunction = jest.spyOn(instance, 'addTag')
    instance.forceUpdate()
    instance.updateSearchString(nonexistentTag)

    wrapper
      .find('TouchableButton')
      .at(0)
      .simulate('press')

    expect(addTagFunction).toHaveBeenCalled()
    expect(addNewTag).toHaveBeenCalledWith(nonexistentTag)
    expect(wrapper.state().clearInput).toBeTruthy()
  })
})
