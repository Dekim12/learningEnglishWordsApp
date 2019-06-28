import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  contentStyle: {
    alignItems: 'center',
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
    width: 300,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    height: 80,
    marginTop: 15,
    marginBottom: 30,
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
  infoList: {
    alignSelf: 'stretch',
    marginBottom: 30,
    paddingHorizontal: 5,
  },
  propName: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: 'Chunkfive',
    color: '#888888',
  },
  propValue: {
    color: '#303030',
  },
  exist: {
    color: '#008000',
  },
  notExist: {
    color: '#cc2900',
  },
})

export default styles
