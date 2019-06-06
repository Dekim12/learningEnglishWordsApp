import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  definition: {
    fontSize: 28,
    lineHeight: 32,
    fontFamily: 'Norwester',
    color: '#FF8A00',
  },
  currentWord: {
    textAlign: 'center',
    fontSize: 48,
    lineHeight: 50,
    fontFamily: 'Chunkfive',
    color: '#404040',
  },
  translationStyle: {
    marginBottom: 17,
    fontSize: 31,
    lineHeight: 33,
    fontFamily: 'OpenSans',
    textAlign: 'center',
    color: '#101010',
  },
  transcript: {
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay',
    color: '#888888',
    fontSize: 25,
  },
  imageContainer: {
    marginTop: 3,
    marginBottom: 25,
    width: 300,
    aspectRatio: 1.35,
    borderRadius: 7,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  indicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  imageStyle: {
    flex: 1,
    borderRadius: 7,
  },
  exampleBlock: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginRight: 3,
    marginTop: 3,
  },
  exampleLabel: {
    width: 8,
    height: 8,
    marginTop: 9,
    marginRight: 5,
    borderRadius: 50,
  },
  example: {
    fontSize: 19,
    fontFamily: 'OpenSans',
    color: 'black',
  },
  selectedWord: {
    backgroundColor: 'green',
    borderRadius: 8,
  },
  tagText: {
    borderRadius: 10,
    fontSize: 22,
    color: 'white',
    fontFamily: 'PlayfairDisplay',
    backgroundColor: '#7575a3',
    paddingBottom: 5,
    lineHeight: 32,
  },
  controlPanel: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 18,
  },
  btn: {
    width: 100,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: '#2d862d',
  },
  tagName: { marginTop: 20, alignSelf: 'flex-start', },
})

export default styles
