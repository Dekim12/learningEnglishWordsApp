import React from 'react'
import { shallow, } from 'enzyme'
import { PERMISSION_QUESTIONS, } from '../../constants'
import { PermissionPopup, } from '../../components'

describe('check PermissionPopup component', () => {
  const mockResolve = jest.fn()
  const mockRefresh = jest.fn()
  const props = {
    isWord: false,
    resolve: mockResolve,
    refresh: mockRefresh,
  }
  const wrapper = shallow(<PermissionPopup {...props} />)

  afterEach(() => {
    mockRefresh.mockClear()
    mockResolve.mockClear()
  })

  test('should display PermissionPopup for a tag', () => {
    const alert = wrapper.find({ testID: 'permission-alert', })

    expect(alert.render().text()).toBe(PERMISSION_QUESTIONS.tag)
  })

  test('should display PermissionPopup for a word', () => {
    wrapper.setProps({ isWord: true, })
    const alert = wrapper.find({ testID: 'permission-alert', })

    expect(alert.render().text()).toBe(PERMISSION_QUESTIONS.word)
  })

  test('should invoke action or close popup depend on choice', () => {
    wrapper
      .find('TouchableButton')
      .at(0)
      .simulate('press')

    expect(mockResolve).toHaveBeenCalledTimes(1)
    expect(mockRefresh).toHaveBeenCalledTimes(1)
  })

  test('should call a callback if permission is confirmed', () => {
    wrapper
      .find('TouchableButton')
      .at(1)
      .simulate('press')

    expect(mockResolve).toHaveBeenCalledTimes(0)
    expect(mockRefresh).toHaveBeenCalledTimes(1)
  })
})
