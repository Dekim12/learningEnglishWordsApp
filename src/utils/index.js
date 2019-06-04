import { Dimensions, } from 'react-native'

export const screenSize = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min

export const getRandomColor = () => `rgb(${getRandomNumber(50, 250)}, ${getRandomNumber(
  50,
  250
)}, ${getRandomNumber(50, 250)})`

export const createLine = (arr) => {
  if (!arr.length) {
    return ''
  }

  return arr.reduce((sum, word) => `${sum}, ${word}`)
}

export const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n)

export const takeRandomWords = (list, wordsCount) => {
  const newWordList = []
  const maxIndex = list.length > wordsCount ? wordsCount : list.length

  while (newWordList.length !== maxIndex) {
    const index = getRandomNumber(0, list.length)

    if (newWordList.indexOf(list[index]) === -1) {
      newWordList.push(list[index])
    }
  }

  return newWordList
}

export const getNecessaryWords = (amount, wordsList, random) => {
  if (random) {
    return takeRandomWords(wordsList, amount)
  }

  return wordsList.slice(0, amount)
}

export const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
  }

  return arr
}

export const getRandomAnswers = (valueArr, answersArr) => {
  const rightAnswer = createLine(valueArr)
  const answers = takeRandomWords(answersArr, 5)

  const wrongAnswers = answers
    .map(word => createLine(word.translation))
    .filter(translation => translation !== rightAnswer)

  return shuffle(wrongAnswers.slice(0, 3).concat(rightAnswer))
}

export const definePerformanceCoefficient = (max, current) => Math.round(((current * 100) / max) * 10) / 10
