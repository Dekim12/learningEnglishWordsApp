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

  test('should render correct permission alert under different props', () => {
    let alert = wrapper.find({ testID: 'permission-alert', })

    expect(alert.render().text()).toBe(PERMISSION_QUESTIONS.tag)

    wrapper.setProps({ isWord: true, })
    alert = wrapper.find({ testID: 'permission-alert', })

    expect(alert.render().text()).toBe(PERMISSION_QUESTIONS.word)
  })

  test('should call necessary functions after a confirm of the permission', () => {
    wrapper
      .find('TouchableButton')
      .at(0)
      .simulate('press')

    expect(mockResolve).toHaveBeenCalledTimes(1)
    expect(mockRefresh).toHaveBeenCalledTimes(1)
  })

  test('should call necessary functions after a reject of the permission', () => {
    wrapper
      .find('TouchableButton')
      .at(1)
      .simulate('press')

    expect(mockResolve).toHaveBeenCalledTimes(0)
    expect(mockRefresh).toHaveBeenCalledTimes(1)
  })
})
