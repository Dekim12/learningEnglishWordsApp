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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  popupForm: {
    width: screenSize.width - 40,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#808080',
    backgroundColor: '#ffffff',
  },
  headline: { fontSize: 34, fontFamily: 'Norwester', color: '#FF8A00', },
  createBtn: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    marginBottom: 7,
    backgroundColor: '#D97604',
    borderWidth: 1,
    borderColor: '#ffcc80',
    borderRadius: 7,
  },
  createBtnText: { color: 'white', fontSize: 30, fontFamily: 'FFF_Tusj', },
  inputStyle: {
    width: screenSize.width - 90,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginVertical: 15,
    backgroundColor: '#DCDCDC',
    borderWidth: 1,
    borderColor: '#787878',
    color: '#303030',
    fontSize: 22,
    borderRadius: 7,
    fontFamily: 'OpenSans',
  },
  closeBtn: {
    position: 'absolute',
    top: 7,
    right: 15,
  },
})

export default styles
