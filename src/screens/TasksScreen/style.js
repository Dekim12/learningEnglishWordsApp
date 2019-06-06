import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  contentContainer: { alignItems: 'center', },
  btnBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: 5,
    marginBottom: 10,
  },
  taskBlock: {
    maxWidth: 600,
    marginBottom: 25,
    alignItems: 'center',
  },
  taskLabel: {
    minHeight: 100,
    alignSelf: 'stretch',
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
})

export default styles
