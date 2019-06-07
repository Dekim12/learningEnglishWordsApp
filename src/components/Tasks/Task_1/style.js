import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
  rootBlock: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  taskCondition: { alignItems: 'center', paddingHorizontal: 10, },
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
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 3,
    marginBottom: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#cc6600',
    backgroundColor: '#C8C8C8',
  },
  answerText: {
    textAlign: 'center',
    lineHeight: 22,
    fontSize: 19,
    fontFamily: 'OpenSans',
    color: '#080808',
  },
})

export default styles
