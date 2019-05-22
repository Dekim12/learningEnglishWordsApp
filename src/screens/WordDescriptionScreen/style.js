import { StyleSheet, } from 'react-native'
import { screenSize, } from '../../utils'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    flex: 1,
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
  imageStyle: {
    marginTop: 25,
    marginBottom: 30,
    width: 300,
    aspectRatio: 1.35,
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
})

export default styles
