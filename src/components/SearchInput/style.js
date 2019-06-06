import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: 'stretch',
    backgroundColor: 'gold',
  },
  inputStyle: {
    flex: 1,
    backgroundColor: '#669999',
    color: '#00264d',
    paddingLeft: 15,
    paddingRight: 40,
    fontSize: 24,
    fontFamily: 'OpenSans',
  },
  closeBtn: {
    position: 'absolute',
    right: 8,
    top: 5,
  },
  focusedInput: { backgroundColor: '#d4d0e2', },
})

export default styles
