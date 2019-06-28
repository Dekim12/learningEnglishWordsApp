// @flow

import React, { Component, } from 'react'
import type { Node, } from 'react'
import { Text, View, ScrollView, } from 'react-native'
import uuidv4 from 'uuid/v4'
import type { ViewStyleProp, } from 'react-native'
import { definePerformanceCoefficient, } from '../../utils'
import {
  MAX_COEFFICIENT,
  SMALL_COEFFICIENT,
  MAX_RATE_WIDTH,
} from '../../constants'
import { getDeviceInfo, } from '../../utils/deviceInfo'
import type { DeviceInfoType, } from '../../flowAliases'
import styles from './style'

export type StatisticScreenProps = {
  tagsCount: number,
  wordsCount: number,
  allAnswers: number,
  rightAnswers: number
}

type State = {
  info: ?DeviceInfoType
}

type InfoArray = Array<[string, mixed]>

class StatisticsScreen extends Component<StatisticScreenProps, State> {
  constructor(props: StatisticScreenProps) {
    super(props)

    this.state = { info: null, }
  }

  componentDidMount = async (): Promise<void> => {
    const info = await getDeviceInfo()

    this.setState({ info, })
  }

  genInfoItems = (properties: InfoArray): Array<Node> => properties.map((elem: [string, mixed]) => {
    let value: mixed = elem[1]
    let valueStyle: ViewStyleProp = styles.propValue

    if (typeof elem[1] === 'boolean') {
      value = elem[1] ? 'YES' : 'NO'
      valueStyle = elem[1] ? styles.exist : styles.notExist
    }

    return (
      <Text key={uuidv4()} style={styles.propName}>
        {elem[0]} - <Text style={valueStyle}>{value}</Text>
      </Text>
    )
  })

  render() {
    const { tagsCount, wordsCount, allAnswers, rightAnswers, } = this.props
    const { info, } = this.state

    const coefficient: number =
      allAnswers === rightAnswers
        ? MAX_COEFFICIENT
        : definePerformanceCoefficient(allAnswers, rightAnswers)

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentStyle}
      >
        <View style={styles.statisticElem}>
          <Text style={styles.definition}>AMOUNT OF WORDS - </Text>
          <Text style={styles.valueStyle}>{wordsCount}</Text>
        </View>
        <View style={[styles.statisticElem, styles.splitStyle]}>
          <Text style={styles.definition}>AMOUNT OF TAGS - </Text>
          <Text style={styles.valueStyle}>{tagsCount}</Text>
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

        <Text style={styles.definition}>YOUR DEVICE INFO</Text>
        <View style={styles.infoList}>
          {info && this.genInfoItems(Object.entries(info))}
        </View>
      </ScrollView>
    )
  }
}

export { StatisticsScreen, }
