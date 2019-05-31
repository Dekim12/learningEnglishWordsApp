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
    alignItems: 'flex-start',
    width: screenSize.width - 30,
    height: 80,
    marginTop: 15,
    borderRadius: 15,
    borderWidth: 4,
    backgroundColor: '#d1e0e0',
    borderColor: '#2d273f',
  },
  coefficientStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 2,
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    backgroundColor: '#267326',
    borderColor: '#79d2a6',
  },
  rateText: {
    fontSize: 50,
    fontFamily: 'Chunkfive',
    color: '#ffffff',
  },
})

export default styles
