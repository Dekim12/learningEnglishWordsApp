import { StyleSheet, } from 'react-native'
import { screenSize, } from '../../utils'

const styles = StyleSheet.create({
  container: {
    width: screenSize.width,
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
    fontSize: 25,
    fontFamily: 'Chunkfive',
    color: '#000000',
  },
})

export default styles
