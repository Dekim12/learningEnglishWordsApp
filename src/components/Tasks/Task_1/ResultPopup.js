// @flow

import React, { useCallback, } from 'react'
import { View, StyleSheet, Text, } from 'react-native'
import { TouchableButton, } from '../..'
import type { VoidFunction, } from '../../../flowAliases'

type Props = {
  result: Array<boolean>,
  goToTasks: (allAnswers: number, rightAnswers: number) => void
}

const ResultPopup = ({ result, goToTasks, }: Props) => {
  const rightAnswers: number = result.reduce((sum: number, elem: boolean) => {
    if (elem) {
      return sum + 1
    }
    return sum
  }, 0)

  const wrongAnswers: number = result.length - rightAnswers

  const finishTask: VoidFunction = useCallback(() => {
    goToTasks(result.length, rightAnswers)
  }, [result.length, rightAnswers])

  return (
    <View style={styles.container}>
      <View style={styles.popupBlock}>
        <View style={styles.definitionBlock}>
          <Text style={styles.headline}>RIGHT ANSWERS:</Text>
          <Text style={styles.resultStyle}>{rightAnswers}</Text>
        </View>
        <View style={styles.definitionBlock}>
          <Text style={styles.headline}>WRONG ANSWERS:</Text>
          <Text style={styles.resultStyle}>{wrongAnswers}</Text>
        </View>
        <TouchableButton style={styles.btn} onPress={finishTask}>
          <Text style={styles.btnText}>NEXT TASK</Text>
        </TouchableButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingBottom: 30,
  },
  popupBlock: {
    width: '95%',
    maxWidth: 430,
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 30,
    paddingHorizontal: 25,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#808080',
    backgroundColor: '#ffffff',
  },
  definitionBlock: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headline: { fontSize: 32, fontFamily: 'Norwester', color: '#FF8A00', },
  btn: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 7,
    backgroundColor: '#006600',
    borderWidth: 1,
    borderColor: '#004d00',
    borderRadius: 7,
  },
  btnText: { color: '#ffffff', fontSize: 30, fontFamily: 'FFF_Tusj', },
  resultStyle: {
    textAlign: 'center',
    fontSize: 43,
    fontFamily: 'Chunkfive',
    color: '#404040',
    marginLeft: 12,
  },
})

export { ResultPopup, }
