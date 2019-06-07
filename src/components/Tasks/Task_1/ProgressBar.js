import React, { Component, } from 'react'
import { View, StyleSheet, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { screenSize, } from '../../../utils'

class ProgressBar extends Component {
  constructor(props) {
    super(props)
    const { countWords, } = this.props

    this.state = { partWidth: screenSize.width / countWords, }
  }

  generateProgressParts = (partsList) => {
    const { partWidth, } = this.state

    return partsList.map(isCorrect => (
      <View
        style={[
          { width: partWidth, },
          isCorrect ? styles.rightPartStyle : styles.wrongPartStyle
        ]}
        key={uuidv4()}
      />
    ))
  }

  handleLayout = (event) => {
    const { countWords, } = this.props
    const { partWidth, } = this.state

    const currentWidth = event.nativeEvent.layout.width / countWords

    if (partWidth !== currentWidth) {
      this.setState({ partWidth: currentWidth, })
    }
  }

  render() {
    const { answersResults, } = this.props

    return (
      <View style={styles.progressBarStyle} onLayout={this.handleLayout}>
        {this.generateProgressParts(answersResults)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  progressBarStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
    height: 10,
    backgroundColor: '#E8E8E8',
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: '#808080',
  },
  rightPartStyle: {
    height: 7,
    backgroundColor: '#006600',
  },
  wrongPartStyle: {
    height: 7,
    backgroundColor: '#e63900',
  },
})

export { ProgressBar, }
