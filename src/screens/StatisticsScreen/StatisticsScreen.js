import React, { Component, } from 'react'
import { Text, View, } from 'react-native'
import { screenSize, definePerformanceCoefficient, } from '../../utils'
import styles from './style'

class StatisticsScreen extends Component {
  static navigationOptions = {
    title: 'Your Statistic',
    headerTitleContainerStyle: {
      marginRight: 40,
    },
  }

  render() {
    const { tagsList, wordsList, allAnswers, rightAnswers, } = this.props
    const {
      container,
      definition,
      valueStyle,
      statisticElem,
      rate,
      rateText,
      coefficientStyle,
    } = styles

    const coefficient =
      allAnswers === rightAnswers
        ? 100
        : definePerformanceCoefficient(allAnswers, rightAnswers)

    return (
      <View style={container}>
        <View style={statisticElem}>
          <Text style={definition}>AMOUNT OF WORDS - </Text>
          <Text style={valueStyle}>{wordsList.length}</Text>
        </View>
        <View style={[statisticElem, { marginBottom: 25, }]}>
          <Text style={definition}>AMOUNT OF TAGS - </Text>
          <Text style={valueStyle}>{tagsList.length}</Text>
        </View>

        <Text style={definition}>CORRECT ANSWER RATE</Text>
        <View style={rate}>
          <View
            style={[
              coefficientStyle,
              { width: ((screenSize.width - 38) * coefficient) / 100, }
            ]}
          >
            {coefficient > 25 && (
              <Text style={rateText}>{`${coefficient}%`}</Text>
            )}
          </View>
          {coefficient <= 25 && (
            <Text style={[rateText, styles.smallCoefficientStyle]}>
              {`${coefficient}%`}
            </Text>
          )}
        </View>
      </View>
    )
  }
}

export { StatisticsScreen, }
