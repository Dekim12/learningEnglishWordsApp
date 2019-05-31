import React, { Component, } from 'react'
import { Text, View, } from 'react-native'
import { screenSize, } from '../../utils'
import styles from './style'

class StatisticsScreen extends Component {
  static navigationOptions = {
    title: 'Your Statistic',
    headerTitleContainerStyle: {
      marginRight: 40,
    },
  }

  render() {
    const { tagsList, wordsList, } = this.props
    const {
      container,
      definition,
      valueStyle,
      statisticElem,
      rate,
      rateText,
      coefficientStyle,
    } = styles

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
              { width: ((screenSize.width - 30) * 73) / 100, }
            ]}
          >
            <Text style={rateText}>73%</Text>
          </View>
        </View>
      </View>
    )
  }
}

export { StatisticsScreen, }
