import {StyleSheet} from 'react-native';
import {Colors} from '../../Themes';
import {Display} from '../../Utils';

const splash = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  Logo: {
    width: Display.setWidth(90),
  },
});

export default splash;
