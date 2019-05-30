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
})

export default styles
