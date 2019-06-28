import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#100E17',
    justifyContent: 'center',
  },
  messageText: {
    marginBottom: 8,
    fontSize: 32,
    lineHeight: 35,
    fontFamily: 'FFF_Tusj',
    color: '#ffffff',
    textAlign: 'center',
  },
  solutionText: {
    marginTop: 10,
    fontSize: 19,
    fontFamily: 'OpenSans',
    color: '#BEBEBE',
    textAlign: 'center',
  },
  reloadBtn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 25,
    marginBottom: 15,
    backgroundColor: '#D97604',
    borderWidth: 1,
    borderColor: '#ffebcc',
    borderRadius: 7,
  },
  btnText: {
    fontSize: 30,
    fontFamily: 'FFF_Tusj',
    textAlign: 'center',
    color: '#ffffff',
  },
})

export default styles
