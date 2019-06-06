import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1.5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#4d446f',
    backgroundColor: '#ffffff',
  },
  wrapper: {
    flex: 1,
  },
  wordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  wordText: {
    fontSize: 24,
    color: 'black',
    marginRight: 15,
    fontFamily: 'Chunkfive',
  },
  transcriptionText: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 3,
    color: '#989898',
    fontFamily: 'PlayfairDisplay',
  },
  translationText: {
    fontSize: 18,
    marginTop: -2,
    color: '#FF8A00',
    fontFamily: 'OpenSans',
  },
  iconBtn: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  firstElemStyle: { borderTopWidth: 1.5, },
})

export default styles
