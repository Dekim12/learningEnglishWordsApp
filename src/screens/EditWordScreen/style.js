import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  definition: {
    fontSize: 28,
    fontFamily: 'Norwester',
    color: '#FF8A00',
  },
  currentWord: {
    textAlign: 'center',
    fontSize: 48,
    fontFamily: 'Chunkfive',
    color: '#404040',
  },
  wordTranscription: {
    marginBottom: 22,
    fontFamily: 'PlayfairDisplay',
    color: '#888888',
    fontSize: 25,
  },
  translationBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 2,
  },
  translationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 5,
    marginTop: 3,
    paddingTop: 3,
    paddingBottom: 7,
    paddingLeft: 15,
    paddingRight: 10,
    borderRadius: 20,
    backgroundColor: '#2d862d',
    borderWidth: 1,
    borderColor: '#006600',
  },
  inputBlock: {
    flexDirection: 'row',
    marginBottom: 35,
    marginTop: 8,
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
  examplesBlock: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    marginBottom: 1,
  },
  exampleItem: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginTop: 8,
    marginBottom: 3,
    paddingTop: 3,
    paddingBottom: 7,
    paddingLeft: 15,
    paddingRight: 40,
    borderRadius: 20,
    backgroundColor: '#2d862d',
    borderWidth: 1,
    borderColor: '#006600',
  },
  exampleButton: { position: 'absolute', right: 10, },
  tagsBlock: { marginBottom: 20, },
  tagItem: {
    justifyContent: 'center',
    marginHorizontal: 5,
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 3,
    paddingBottom: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#DCDCDC',
    borderWidth: 1,
    borderColor: '#808080',
  },
  editBtn: {
    marginTop: 5,
    marginBottom: 18,
    paddingVertical: 7,
    paddingHorizontal: 20,
    backgroundColor: '#D97604',
    borderWidth: 1,
    borderColor: '#ffcc80',
    borderRadius: 7,
  },
  editText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'FFF_Tusj',
  },
  itemText: {
    fontFamily: 'OpenSans',
    color: 'white',
    fontSize: 18,
  },
  deleteItemBtn: { marginLeft: 12, marginTop: 4, },
  activeTagColor: { backgroundColor: '#2d862d', },
  inactiveTagColor: { color: '#ffffff', },
  tagItemText: {
    fontFamily: 'OpenSans',
    color: '#484848',
    fontSize: 16,
  },
})

export default styles
