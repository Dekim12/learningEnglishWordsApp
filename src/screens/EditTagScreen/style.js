import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
  wrapper: { flex: 1, },
  container: {
    paddingTop: 5,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  contentContainer: { alignItems: 'center', },
  currentWord: {
    marginBottom: 8,
    textAlign: 'center',
    fontSize: 48,
    fontFamily: 'Chunkfive',
    color: '#404040',
  },
  definition: {
    fontSize: 28,
    fontFamily: 'Norwester',
    color: '#FF8A00',
  },
  inputBlock: {
    flexDirection: 'row',
    marginBottom: 35,
    marginTop: 5,
  },
  inputBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FF8A00',
    borderWidth: 1,
    borderColor: '#787878',
    borderLeftWidth: 0,
  },
  textInput: {
    backgroundColor: '#DCDCDC',
    borderWidth: 1,
    borderColor: '#787878',
    color: '#303030',
    width: 270,
    paddingHorizontal: 20,
    justifyContent: 'center',
    fontSize: 18,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    fontFamily: 'OpenSans',
  },
  wordsBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  wordItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 5,
    marginTop: 5,
    paddingTop: 3,
    paddingBottom: 7,
    paddingLeft: 15,
    paddingRight: 10,
    borderRadius: 20,
    backgroundColor: '#2d862d',
    borderWidth: 1,
    borderColor: '#006600',
  },
  btn: {
    alignItems: 'center',
    width: 170,
    marginBottom: 27,
    paddingVertical: 7,
    backgroundColor: '#D97604',
    borderWidth: 1,
    borderColor: '#ffcc80',
    borderRadius: 7,
  },
  deleteBtn: { marginTop: 30, marginBottom: 10, backgroundColor: '#ac3939', },
  btnText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'FFF_Tusj',
  },
  alert: {
    color: '#b30000',
    fontSize: 16,
    fontFamily: 'PlayfairDisplay',
  },
  wordItemText: {
    fontFamily: 'OpenSans',
    color: 'white',
    fontSize: 20,
  },
  wordItemDeleteBtn: { marginLeft: 12, marginTop: 4, },
})

export default styles
