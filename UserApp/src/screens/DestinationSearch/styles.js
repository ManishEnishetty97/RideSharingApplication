import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  FromContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  ToContainer: {
    position: 'absolute',
    top: 55,
    left: 10,
    right: 10,
  },
  textInput: {
    marginLeft: 20,
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 15,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 60,
    backgroundColor: '#919191',
    position: 'absolute',
    top: 25,
    left: 17,
  },
});

export default styles;
