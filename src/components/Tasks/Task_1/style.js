import { StyleSheet, } from 'react-native'
import { screenSize, } from '../../../utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    left: 0,
    right: 0,
    height: screenSize.height - 97,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 5,
    backgroundColor: '#ffffff',
  },
  taskCondition: { alignItems: 'center', },
  wordStyle: {
    textAlign: 'center',
    fontSize: 48,
    fontFamily: 'Chunkfive',
    color: '#404040',
  },
  transcriptionStyle: {
    marginBottom: 22,
    fontFamily: 'PlayfairDisplay',
    color: '#888888',
    fontSize: 25,
    textAlign: 'center',
  },
  answersBlock: {
    alignItems: 'center',
  },
  answerBtn: {
    width: screenSize.width - 25,
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#cc6600',
    backgroundColor: '#C8C8C8',
  },
  answerText: {
    width: screenSize.width - 45,
    textAlign: 'center',
    lineHeight: 22,
    fontSize: 19,
    fontFamily: 'OpenSans',
    color: '#080808',
  },
})

export default styles
