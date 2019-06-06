import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#4d446f',
  },
  tagName: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 24,
    fontFamily: 'Chunkfive',
    color: '#000000',
  },
  firstElem: { borderTopWidth: 1.5, },
  hashtag: { color: '#B0B0B0', },
  editBtn: { marginLeft: 5, },
})

export default styles
