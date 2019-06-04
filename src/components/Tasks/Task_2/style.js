import { StyleSheet, } from 'react-native'
import { screenSize, } from '../../../utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    left: 0,
    right: 0,
    height: screenSize.height - 97,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 5,
    backgroundColor: '#ffffff',
  },
})

export default styles
