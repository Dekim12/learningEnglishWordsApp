import { StyleSheet, } from 'react-native'
import { screenSize, } from '../../utils'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  definition: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontFamily: 'Norwester',
    color: '#FF8A00',
  },
  textValue: {
    fontSize: 29,
    fontFamily: 'OpenSans',
    color: '#101010',
  },
  transcript: {
    fontFamily: 'PlayfairDisplay',
    color: '#888888',
    fontSize: 27,
  },
  imageContainer: {
    marginTop: 25,
    marginBottom: 30,
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
    marginTop: 3,
  },
  exampleLabel: {
    width: 8,
    height: 8,
    marginTop: 9,
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: 'green',
  },
  example: {
    width: screenSize.width - 33,
    fontSize: 18,
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
  },
  controlPanel: {
    width: screenSize.width - 100,
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
})

export default styles
