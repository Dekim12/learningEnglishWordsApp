import { StyleSheet, } from 'react-native'
import { screenSize, } from '../../utils'

const styles = StyleSheet.create({
  searchContainer: {
    width: screenSize.width,
  },
  inputStyle: {
    width: screenSize.width,
    backgroundColor: '#669999',
    color: '#00264d',
    paddingLeft: 15,
    paddingRight: 40,
    alignSelf: 'center',
    fontSize: 24,
    fontFamily: 'OpenSans',
  },
  closeBtn: {
    position: 'absolute',
    right: 8,
    top: 5,
  },
})

export default styles
