import { StyleSheet, } from 'react-native'
import { screenSize, } from '../../utils'

const styles = StyleSheet.create({
  container: {
    width: screenSize.width,
    paddingTop: 5,
    paddingBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  btnBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenSize.width - 26,
    marginTop: 5,
    marginBottom: 10,
  },
  taskLabel: {
    width: screenSize.width - 30,
    height: 100,
    justifyContent: 'center',
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#2d862d',
    borderWidth: 1,
    borderColor: '#006600',
  },
  taskText: {
    fontSize: 27,
    textAlign: 'center',
    fontFamily: 'FFF_Tusj',
    color: '#ffffff',
  },
  taskBlock: { marginBottom: 25, },
})

export default styles
