import React from 'react'
import { shallow, } from 'enzyme'
import { TasksScreen, } from '../../screens'
import { TASK_NAMES_LIST, } from '../../constants'
import { COMPONENT_ID, } from '../mock'

describe('check TasksScreen', () => {
  const changeScreen = jest.fn()
  const props = {
    componentId: COMPONENT_ID,
    changeScreen,
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<TasksScreen {...props} />)
  })

  afterEach(() => {
    changeScreen.mockClear()
  })

  test('should render tasks', () => {
    expect(
      wrapper
        .find('View')
        .at(1)
        .children()
    ).toHaveLength(TASK_NAMES_LIST.length)
  })

  test('should open a task', () => {
    wrapper
      .find({ testID: 'task-btn', })
      .at(0)
      .simulate('press')

    expect(changeScreen).toHaveBeenCalledWith(
      'openTask',
      props.componentId,
      TASK_NAMES_LIST[0]
    )
  })

  test('should open the statistic screen', () => {
    wrapper
      .find('TouchableButton')
      .at(0)
      .simulate('press')

    expect(changeScreen).toHaveBeenCalledWith('toStatistic', props.componentId)
  })

  test('should open the settings screen', () => {
    wrapper
      .find('TouchableButton')
      .at(1)
      .simulate('press')

    expect(changeScreen).toHaveBeenCalledWith('toSettings', props.componentId)
  })
})
