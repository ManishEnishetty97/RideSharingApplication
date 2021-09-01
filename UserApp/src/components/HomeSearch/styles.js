import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#e0e0e0',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#6e6e6e',
  },
  timeContainer: {
    flexDirection: 'row',
    width: 100,
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderColor: '#dbdbdb',
    borderBottomWidth: 1,
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    color: '#181717',
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default styles;
