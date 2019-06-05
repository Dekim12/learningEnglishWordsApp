import { StyleSheet, } from 'react-native'
import { screenSize, } from '../../utils'

const styles = StyleSheet.create({
  container: {
    width: screenSize.width,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  statisticElem: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  definition: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 28,
    fontFamily: 'Norwester',
    color: '#FF8A00',
  },
  valueStyle: {
    fontSize: 40,
    fontFamily: 'Chunkfive',
    color: '#404040',
  },
  rate: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: screenSize.width - 30,
    height: 80,
    marginTop: 15,
    borderWidth: 4,
    backgroundColor: '#d1e0e0',
    borderColor: '#2d273f',
  },
  coefficientStyle: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#267326',
  },
  rateText: {
    fontSize: 50,
    fontFamily: 'Chunkfive',
    color: '#ffffff',
  },
  smallCoefficientStyle: {
    marginLeft: 10,
    color: '#808080',
  },
  splitStyle: { marginBottom: 25, },
})

export default styles
