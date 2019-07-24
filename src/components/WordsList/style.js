import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingBottom: 90,
  },
  addWordBlock: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#2d862d',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#003300',
  },
  definition: {
    marginRight: 15,
    fontSize: 20,
    fontFamily: 'Norwester',
    color: '#003300',
  },
  valueStyle: {
    flex: 1,
    flexWrap: 'wrap',
    marginBottom: 3,
    fontSize: 24,
    fontFamily: 'Chunkfive',
    color: '#ffffff',
  },
  loadingBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
})

export default styles
