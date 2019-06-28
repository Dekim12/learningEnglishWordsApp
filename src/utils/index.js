// @flow

import { Dimensions, } from 'react-native'
import {
  COLOR_VALUES,
  MAX_COEFFICIENT,
  COUNT_WRONG_RANDOM_ANSWERS,
  ROUNDING_DEGREE,
} from '../constants'
import type { WordObjType, } from '../flowAliases'

export const screenSize: {
  width: number,
  height: number
} = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min

export const getRandomColor = (): string => `rgb(${getRandomNumber(
  COLOR_VALUES.min,
  COLOR_VALUES.max
)}, ${getRandomNumber(COLOR_VALUES.min, COLOR_VALUES.max)}, ${getRandomNumber(
  COLOR_VALUES.min,
  COLOR_VALUES.max
)})`

export const createLine = (arr: Array<string>): string => {
  if (!Array.isArray(arr) || !arr.length) {
    return ''
  }

  return arr.reduce((sum: string, word: string): string => `${sum}, ${word}`)
}

export const isNumber = (n: any): boolean => !isNaN(parseFloat(n)) && isFinite(n)

export const takeRandomWords = (
  list: Array<WordObjType> = [],
  wordsCount: number = 0
): Array<WordObjType> => {
  const newWordList: Array<WordObjType> = []
  const maxIndex: number = list.length > wordsCount ? wordsCount : list.length

  while (newWordList.length !== maxIndex) {
    const index: number = getRandomNumber(0, list.length)

    if (newWordList.indexOf(list[index]) === -1) {
      newWordList.push(list[index])
    }
  }

  return newWordList
}

export const getNecessaryWords = (
  amount: number = 0,
  wordsList: Array<WordObjType> = [],
  random: boolean
): Array<WordObjType> => {
  if (random) {
    return takeRandomWords(wordsList, amount)
  }

  return wordsList.slice(0, amount)
}

export const shuffle = (arr: Array<string> = []): Array<string> => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1))
    const temp: string = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
  }

  return arr
}

export const getRandomAnswers = (
  valueArr: Array<string>,
  answersArr: Array<WordObjType>
): Array<string> => {
  const rightAnswer: string = createLine(valueArr)
  const answers: Array<WordObjType> = takeRandomWords(
    answersArr,
    COUNT_WRONG_RANDOM_ANSWERS.possible
  )

  const wrongAnswers: Array<string> = answers
    .map((word: WordObjType): string => createLine(word.translation))
    .filter((translation: string): boolean => translation !== rightAnswer)

  return shuffle(
    wrongAnswers
      .slice(0, COUNT_WRONG_RANDOM_ANSWERS.necessary)
      .concat(rightAnswer)
  )
}

export const definePerformanceCoefficient = (
  max: number = 100,
  current: number = 0
): number => Math.round(((current * MAX_COEFFICIENT) / max) * ROUNDING_DEGREE) /
  ROUNDING_DEGREE
