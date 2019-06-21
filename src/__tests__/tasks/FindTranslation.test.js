import React from 'react'
import { shallow, } from 'enzyme'
import { FindTranslation, } from '../../components/Tasks'
import { ResultPopup, } from '../../components/Tasks/Task_1/ResultPopup'
import { ProgressBar, } from '../../components/Tasks/Task_1/ProgressBar'
import { SelectableAnswer, } from '../../components/Tasks/Task_1/Answer'
import { Connector, } from '../../components/Tasks/Task_1/Connector'
import { fakeData, } from '../../constants'
import { WORDS_MOCK_LIST, } from '../mock'

describe('check FindTranslation component', () => {
  const props = {
    name: 'Find the translation',
    wordsForTask: WORDS_MOCK_LIST,
    allWords: fakeData,
    goToTasks: jest.fn(),
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<FindTranslation {...props} />)
    instance = wrapper.instance()
  })

  test('should pass the task and go to the next word', () => {
    const currentWordIndex = wrapper.state().currentWord
    instance.toNextWord(true)

    expect(wrapper.exists('ResultPopup')).toBeFalsy()
    expect(wrapper.state().currentWord).toEqual(currentWordIndex + 1)
    expect(wrapper.state().answersResult).toEqual([true])

    instance.toNextWord(false)
    expect(wrapper.exists('ResultPopup')).toBeFalsy()
    expect(wrapper.state().currentWord).toEqual(currentWordIndex + 2)
    expect(wrapper.state().answersResult).toEqual([true, false])

    wrapper.setState({ currentWord: props.wordsForTask.length - 1, })
    instance.toNextWord(true)
    expect(wrapper.exists('ResultPopup')).toBeTruthy()
    expect(wrapper.state().answersResult).toEqual([true, false, true])
  })
})

describe('check ResultPopup component', () => {
  const goToTasks = jest.fn()
  const props = { result: [true, false, true, true, false], goToTasks, }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ResultPopup {...props} />)
  })

  test('should finish task with correct task results', () => {
    const rightAnswersCount = 3
    wrapper.find('TouchableButton').simulate('press')

    expect(goToTasks).toHaveBeenCalledWith(
      props.result.length,
      rightAnswersCount
    )
  })
})

describe('check ProgressBar component', () => {
  const props = { countWords: 5, answersResults: [true, false, true], }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<ProgressBar {...props} />)
    instance = wrapper.instance()
  })

  test('should generate progress parts', () => {
    const generatePartsSpy = jest.spyOn(instance, 'generateProgressParts')
    instance.forceUpdate()

    expect(generatePartsSpy).toHaveBeenCalledTimes(1)
    expect(generatePartsSpy).toHaveBeenCalledWith(props.answersResults)
  })
})

describe('check Connector component', () => {
  const toNextWord = jest.fn()
  const props = {
    defaultResult: true,
    toNextWord,
    possibleAnswers: ['всемогущий', 'рыба', 'дом', 'собака'],
    currentWord: WORDS_MOCK_LIST[0],
    countWordsForTask: 5,
    answersResult: [],
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<Connector {...props} />)
    instance = wrapper.instance()
  })

  test('should initialize the state correctly', () => {
    expect(wrapper.state().currentResult).toEqual(props.defaultResult)
  })

  test('should generate answers buttons', () => {
    const spy = jest.spyOn(instance, 'generateAnswersButtons')
    instance.forceUpdate()

    expect(spy).toHaveBeenCalledWith(
      props.possibleAnswers,
      props.currentWord.translation
    )
  })

  test('should check an answer result correctly', () => {
    instance.checkResult(true)

    expect(toNextWord).toHaveBeenCalledWith(true)
    toNextWord.mockClear()

    instance.checkResult(false)
    expect(toNextWord).not.toHaveBeenCalled()
    expect(wrapper.state().currentResult).toBeFalsy()
    toNextWord.mockClear()

    instance.checkResult(true)

    expect(toNextWord).toHaveBeenCalledWith(false)
    expect(wrapper.state().currentResult).toBeTruthy()
  })
})

describe('check SelectableAnswer component', () => {
  const props = {
    checkResult: jest.fn(),
    isRightAnswer: true,
    currentAnswer: 'dog',
  }

  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<SelectableAnswer {...props} />)
    instance = wrapper.instance()
  })

  test('should check a result and pass to the next word', () => {
    const textStyle = { color: '#ffffff', }
    const backgroundStyle = { backgroundColor: '#339933', }

    const checkFunctionSpy = jest.spyOn(instance, 'check')
    const toNextWordSpy = jest.spyOn(instance, 'nextWord')
    instance.forceUpdate()

    wrapper.simulate('press')

    expect(checkFunctionSpy).toHaveBeenCalled()
    expect(wrapper.state().btnColor).toEqual(backgroundStyle)
    expect(wrapper.state().textColor).toEqual(textStyle)
    expect(toNextWordSpy).toHaveBeenCalledWith(true)
  })
})
