import React from 'react'
import { shallow, } from 'enzyme'
import { TagCard, } from '../../components'

describe('check TagCard component', () => {
  const toEdit = jest.fn()
  const toDetails = jest.fn()
  const props = {
    name: 'myTag',
    toEdit,
    isFirstCard: false,
    toDetails,
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<TagCard {...props} />)
  })

  test('should open a tag details screen', () => {
    wrapper
      .find('TouchableButton')
      .at(0)
      .simulate('press')

    expect(toDetails).toHaveBeenCalledTimes(1)
    expect(toDetails).toHaveBeenCalledWith(props.name)
  })

  test('should open the edit tag screen', () => {
    wrapper
      .find('TouchableButton')
      .at(1)
      .simulate('press')

    expect(toEdit).toHaveBeenCalledTimes(1)
    expect(toEdit).toHaveBeenCalledWith(props.name)
  })
})
