import React from 'react'
import { shallow, } from 'enzyme'
import { FindTranslation, } from '../../components/Tasks'
import { ResultPopup, } from '../../components/Tasks/Task_1/ResultPopup'
import { ProgressBar, } from '../../components/Tasks/Task_1/ProgressBar'
import { SelectableAnswer, } from '../../components/Tasks/Task_1/Answer'
import { Connector, } from '../../components/Tasks/Task_1/Connector'
import { fakeData, } from '../../constants'

const wordsForTask = [
  {
    id: 1,
    word: 'home',
    transcription: 'hoʊm',
    translation: ['дом', 'жилище', 'родина', 'домашний'],
    url: 'http://lokhousing.com/wp-content/uploads/2019/03/Home-1-.jpeg',
    examples: [
      'Daddy went home to sleep',
      'Now go home and get some rest',
      'Alex had provided the money to remodel the home, but insisted that it stay in her name only'
    ],
    tagName: 'myTagList',
  },
  {
    id: 2,
    word: 'dog',
    transcription: 'dɒɡ',
    translation: ['собака', 'пес', 'собачка'],
    url: 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg',
    examples: [
      'He dogged her every move.',
      'You dirty dog!',
      'That dog barks all day long.'
    ],
    tagName: 'secondTag',
  },
  {
    id: 3,
    word: 'fish',
    transcription: 'fɪʃ',
    translation: ['рыба', 'ловить рыбу', 'рыбачить'],
    url:
      'https://www.fishkeepingworld.com/wp-content/uploads/2018/06/Clownfish.png',
    examples: [
      'Did you catch any fish?',
      'I like to go fishing on weekends',
      'Dad really loves to fish.'
    ],
    tagName: 'secondTag',
  },
  {
    id: 4,
    word: 'ruby',
    transcription: 'ˈruːbi',
    translation: ['рубин', 'рубиновый'],
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmWsHoVVaxbXRM8YV9Zg4cyHuAkqpDXW5qtX6olmI8Wd9OHaj',
    examples: [
      'Ruby blew out all her candles at one go.',
      'The ruby was once possessed by an ancient queen.'
    ],
    tagName: 'myTagList',
  },
  {
    id: 6,
    word: 'though',
    transcription: 'ðoʊ',
    translation: ['хотя', 'однако', 'несмотря на', 'все же'],
    url:
      'https://media.tenor.com/images/b445b5ed4d22e96a36bd74b23f3f0c39/tenor.png',
    examples: [
      'It is hard work. I enjoy it though.',
      'Though it was raining, we went hiking.'
    ],
    tagName: 'myTagList',
  }
]

describe('check FindTranslation component', () => {
  const props = {
    name: 'Find the translation',
    wordsForTask,
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

    wrapper.setState({ currentWord: wordsForTask.length - 1, })
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
    currentWord: {
      id: 2,
      word: 'dog',
      transcription: 'dɒɡ',
      translation: ['собака'],
      url: 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg',
      examples: ['He dogged her every move.'],
      tagName: 'secondTag',
    },
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
    const checkFunctionSpy = jest.spyOn(instance, 'check')
    const toNextWordSpy = jest.spyOn(instance, 'nextWord')
    instance.forceUpdate()

    wrapper.simulate('press')

    expect(checkFunctionSpy).toHaveBeenCalled()
    expect(wrapper.state().btnColor).toEqual({ backgroundColor: '#339933', })
    expect(wrapper.state().textColor).toEqual({ color: '#ffffff', })
    expect(toNextWordSpy).toHaveBeenCalledWith(true)
  })
})
