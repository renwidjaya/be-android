import {StyleSheet} from 'react-native';
import {Display} from '../../Utils';

const header = StyleSheet.create({
  Card: {
    marginTop: 24,
    backgroundColor: '#fff',
    minHeight: Display.setHeight(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#EBF8FF',
    alignSelf: 'stretch',
  },
  CardArrow: {
    marginTop: 22,
    marginLeft: 16,
  },
  IconArrow: {
    height: 16,
    width: Display.setWidth(5),
  },
  IconHelp: {
    height: 16,
    width: 16,
    marginLeft: 16,
    marginRight: 5,
  },
  CardHelp: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#EBF8FF',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  CardText: {
    top: -2,
    marginRight: 16,
  },
});

export default header;
