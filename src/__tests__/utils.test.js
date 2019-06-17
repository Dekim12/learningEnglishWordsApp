import {
  getRandomColor,
  createLine,
  isNumber,
  takeRandomWords,
  getNecessaryWords,
  shuffle,
  getRandomAnswers,
  definePerformanceCoefficient,
} from '../utils'
import { COUNT_WRONG_RANDOM_ANSWERS, } from '../constants'

describe('utils functions', () => {
  const wordList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  const arrayOfString = ['my', 'name', 'is', 'Nick']
  const expectedString = 'my, name, is, Nick'
  const rightAnswer = ['c']

  test('getRandomColor function', () => {
    expect(getRandomColor()).toMatch(/rgb/)
    expect(typeof getRandomColor()).toBe('string')
  })

  test('createLine function', () => {
    expect(createLine(arrayOfString)).toEqual(expectedString)
    expect(createLine([])).toBe('')
    expect(createLine('abc')).toBe('')
    expect(createLine(123)).toBe('')
    expect(createLine(undefined)).toBe('')
  })

  test('isNumber function', () => {
    expect(isNumber(12)).toBeTruthy()
    expect(isNumber(Infinity)).toBeFalsy()
    expect(isNumber(null)).toBeFalsy()
    expect(isNumber(NaN)).toBeFalsy()
    expect(isNumber(undefined)).toBeFalsy()
    expect(isNumber('string')).toBeFalsy()
    expect(isNumber({ a: 12, })).toBeFalsy()
    expect(isNumber([1, 2, 3])).toBeFalsy()
  })

  test('takeRandomWords function', () => {
    expect(Array.isArray(takeRandomWords(wordList, 4))).toBeTruthy()
    expect(takeRandomWords(wordList, 4)).toHaveLength(4)
    expect(wordList).toEqual(
      expect.arrayContaining(takeRandomWords(wordList, 4))
    )
    expect(takeRandomWords()).toStrictEqual([])
  })

  test('getNecessaryWords function', () => {
    expect(Array.isArray(getNecessaryWords(4, wordList))).toBeTruthy()
    expect(getNecessaryWords()).toStrictEqual([])
    expect(getNecessaryWords(4, wordList, true)).toHaveLength(4)
    expect(getNecessaryWords(4, wordList, false)).toHaveLength(4)
    expect(wordList).toEqual(
      expect.arrayContaining(getNecessaryWords(4, wordList, true))
    )
  })

  test('shuffle function', () => {
    expect(Array.isArray(shuffle(wordList))).toBeTruthy()
    expect(shuffle(wordList)).toHaveLength(wordList.length)
    expect(wordList).toEqual(expect.arrayContaining(shuffle(wordList)))
    expect(shuffle()).toStrictEqual([])
  })

  test('getRandomAnswers function', () => {
    expect(Array.isArray(getRandomAnswers(rightAnswer, wordList))).toBeTruthy()
    expect(getRandomAnswers(rightAnswer, wordList)).toHaveLength(
      COUNT_WRONG_RANDOM_ANSWERS.necessary + 1
    )
  })

  test('definePerformanceCoefficient function', () => {
    expect(definePerformanceCoefficient(100, 20)).toBe(20)
    expect(definePerformanceCoefficient(11, 4)).toBe(36.4)
    expect(definePerformanceCoefficient(5, 0)).toBe(0)
    expect(definePerformanceCoefficient(0, 5)).toBe(Infinity)
    expect(definePerformanceCoefficient()).toBe(0)
    expect(definePerformanceCoefficient(5)).toBe(0)
  })
})
