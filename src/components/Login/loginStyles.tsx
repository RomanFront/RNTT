import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  authContainer: {
    padding: 10,
    borderRadius: 5,
    borderColor: 'silver',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#edf4ff',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  inputRowContainer: {
    height: 40,
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: 10,
  },
  input: {
    width: '60%',
    height: 30,
    marginLeft: 15,
    padding: 3,
    borderRadius: 5,
    borderColor: 'silver',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#fff',
  }
});

export default loginStyles;