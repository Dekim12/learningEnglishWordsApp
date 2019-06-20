import React from 'react'
import { shallow, } from 'enzyme'
import { WordsScreen, } from '../../screens'

describe('check WordsScreen', () => {
  const wordId = 12
  const word = 'dog'
  const changeScreen = jest.fn()
  const props = {
    componentId: 1233,
    changeScreen,
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<WordsScreen {...props} />)
    instance = wrapper.instance()
  })

  afterEach(() => {
    changeScreen.mockClear()
  })

  test('should open description screen', () => {
    instance.toDescription(wordId, word)

    expect(changeScreen).toHaveBeenLastCalledWith(
      'toWordDescription',
      props.componentId,
      wordId,
      word
    )
  })

  test('should open the new word screen with correct params', () => {
    instance.toNewWord('cat')

    expect(changeScreen).toHaveBeenLastCalledWith(
      'createNewWord',
      props.componentId,
      'cat'
    )

    wrapper.find('TouchableButton').simulate('press')
    expect(changeScreen).toHaveBeenCalledTimes(2)
    expect(changeScreen).toHaveBeenLastCalledWith(
      'createNewWord',
      props.componentId,
      ''
    )
  })

  test('should show or hide the permission popup', () => {
    const resolveFunction = () => {}

    let state = wrapper.state()
    expect(wrapper.exists('PermissionPopup')).toBeFalsy()
    expect(state.permissionVisible).toBeFalsy()
    expect(state.permissionResolve).toBeNull()

    instance.setPermissionFunctions(resolveFunction)
    state = wrapper.state()
    expect(wrapper.exists('PermissionPopup')).toBeTruthy()
    expect(state.permissionVisible).toBeTruthy()
    expect(state.permissionResolve).toBe(resolveFunction)

    instance.refreshPermission()
    state = wrapper.state()
    expect(wrapper.exists('PermissionPopup')).toBeFalsy()
    expect(state.permissionVisible).toBeFalsy()
    expect(state.permissionResolve).toBeNull()
  })
})
