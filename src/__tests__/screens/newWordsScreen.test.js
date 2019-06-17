import React from 'react'
import sinon from 'sinon'
import { shallow, } from 'enzyme'
import { View, Text, } from 'react-native'
import { NewWordScreen, } from '../../screens'

const createTestProps = props => ({
  ...props,
})

describe('check a correct rendering NewWordScreen', () => {
  let wrapper
  let props
  beforeEach(() => {
    props = createTestProps({ name: 'Dog', })
    wrapper = shallow(<NewWordScreen {...props} />)
  })

  test('should render a <View /> and a <Text />', () => {
    expect(wrapper.find(View)).toHaveLength(1)
    expect(wrapper.find(Text)).toHaveLength(1)
  })
})
