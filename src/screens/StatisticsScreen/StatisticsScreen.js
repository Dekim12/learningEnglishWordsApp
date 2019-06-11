import React, { Component, } from 'react'
import { Text, View, } from 'react-native'
import { definePerformanceCoefficient, } from '../../utils'
import {
  MAX_COEFFICIENT,
  SMALL_COEFFICIENT,
  MAX_RATE_WIDTH,
} from '../../constants'
import styles from './style'

class StatisticsScreen extends Component {
  render() {
    const { tagsList, wordsList, allAnswers, rightAnswers, } = this.props

    const coefficient =
      allAnswers === rightAnswers
        ? MAX_COEFFICIENT
        : definePerformanceCoefficient(allAnswers, rightAnswers)

    return (
      <View style={styles.container}>
        <View style={styles.statisticElem}>
          <Text style={styles.definition}>AMOUNT OF WORDS - </Text>
          <Text style={styles.valueStyle}>{wordsList.length}</Text>
        </View>
        <View style={[styles.statisticElem, styles.splitStyle]}>
          <Text style={styles.definition}>AMOUNT OF TAGS - </Text>
          <Text style={styles.valueStyle}>{tagsList.length}</Text>
        </View>

        <Text style={styles.definition}>CORRECT ANSWER RATE</Text>
        <View style={styles.rate}>
          <View
            style={[
              styles.coefficientStyle,
              {
                width: (MAX_RATE_WIDTH * coefficient) / MAX_COEFFICIENT,
              }
            ]}
          >
            {coefficient > SMALL_COEFFICIENT && (
              <Text style={styles.rateText}>{`${coefficient}%`}</Text>
            )}
          </View>
          {coefficient <= SMALL_COEFFICIENT && (
            <Text style={[styles.rateText, styles.smallCoefficientStyle]}>
              {`${coefficient}%`}
            </Text>
          )}
        </View>
      </View>
    )
  }
}

export { StatisticsScreen, }
