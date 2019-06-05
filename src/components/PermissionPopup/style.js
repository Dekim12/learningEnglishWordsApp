import { StyleSheet, } from 'react-native'
import { screenSize, } from '../../utils'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  popupBlock: {
    width: screenSize.width - 40,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#808080',
    backgroundColor: '#ffffff',
  },
  headline: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Chunkfive',
    color: '#404040',
  },
  bottomsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 7,
    borderWidth: 1,
    backgroundColor: '#2d862d',
    borderColor: '#006600',
  },
  btnText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'FFF_Tusj',
  },
  rejectBtn: { backgroundColor: '#D97604', borderColor: '#ffcc80', },
})

export default styles
