import { StyleSheet, } from 'react-native'
import { screenSize, } from '../../utils'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headline: {
    textAlign: 'center',
    fontSize: 45,
    fontFamily: 'Chunkfive',
    color: '#404040',
    lineHeight: 48,
  },
  wordItem: {
    width: screenSize.width - 40,
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
    backgroundColor: '#2d862d',
    borderWidth: 1,
    borderColor: '#006600',
  },
  wordStyle: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Chunkfive',
    color: '#ffffff',
  },
  transcriptionStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '400',
    color: '#D3D3D3',
    fontFamily: 'PlayfairDisplay',
  },
  translationStyle: {
    marginTop: 5,
    lineHeight: 22,
    fontSize: 21,
    textAlign: 'center',
    color: '#e67a00',
    fontFamily: 'OpenSans',
  },
  deleteBtn: {
    paddingVertical: 4,
    paddingHorizontal: 25,
    borderRadius: 7,
    marginVertical: 10,
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#A9A9A9',
  },
  addBtn: {
    marginTop: 8,
    marginBottom: 37,
    paddingVertical: 7,
    paddingHorizontal: 20,
    backgroundColor: '#D97604',
    borderWidth: 1,
    borderColor: '#ffcc80',
    borderRadius: 7,
  },
  addText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'FFF_Tusj',
  },
})

export default styles
