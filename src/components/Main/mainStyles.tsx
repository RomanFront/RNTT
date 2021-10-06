import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  root: {
    padding: 10,
    borderRadius: 5,
    borderColor: 'silver',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#edf4ff',
  },
  input: {
    width: '20%',
    height: 30,
    padding: 3,
    borderRadius: 5,
    borderColor: 'silver',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#fff',
  },
  paginatorContainer: {
    marginTop: 10,
    height: 40,
  },
  paginator: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default loginStyles;