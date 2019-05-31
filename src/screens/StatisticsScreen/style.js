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
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    marginTop: 15,
    borderRadius: 100,
    borderWidth: 5,
    backgroundColor: '#c2c2d6',
    borderColor: '#400080',
  },
  rateText: {
    marginLeft: 13,
    marginBottom: 7,
    fontSize: 60,
    fontFamily: 'Chunkfive',
    color: '#404040',
  },
})

export default styles
