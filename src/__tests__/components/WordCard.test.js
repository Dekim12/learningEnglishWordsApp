import React from 'react'
import { shallow, } from 'enzyme'
import { WordCard, } from '../../components'

describe('check WordCard component', () => {
  const goToDetails = jest.fn()
  const deleteWord = jest.fn()
  const props = {
    description: {
      id: 1,
      transcription: 'həˈləʊ',
      word: 'hello',
      translation: ['привет'],
    },
    isFirstCard: false,
    goToDetails,
    deleteWord,
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<WordCard {...props} />)
  })

  test('should open the details word screen', () => {
    wrapper.simulate('press')

    expect(goToDetails).toHaveBeenCalledWith(
      props.description.id,
      props.description.word
    )
  })

  test('should delete current word', () => {
    wrapper
      .find('TouchableButton')
      .at(1)
      .simulate('press')

    expect(deleteWord).toHaveBeenCalledTimes(1)
  })
})
