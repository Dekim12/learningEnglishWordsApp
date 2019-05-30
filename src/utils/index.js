import { Dimensions, } from 'react-native'

export const screenSize = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

const getRandomNumber = () => Math.floor(Math.random() * (250 - 50)) + 50

export const getRandomColor = () => `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`

export const createLine = (arr) => {
  if (!arr.length) {
    return ''
  }

  return arr.reduce((sum, word) => `${sum}, ${word}`)
}
