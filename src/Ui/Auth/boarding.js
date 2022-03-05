import {StyleSheet} from 'react-native';
import {Colors} from '../../Themes';
import {Display} from '../../Utils';

const boarding = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: Colors.DEFAULT_WHITE,
    width: Display.setWidth(100),
  },
  WelcomeList: {
    height: Display.setHeight(78),
  },
  Logo: {
    width: Display.setWidth(100),
    height: Display.setHeight(55),
  },
  Title: {
    padding: 24,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 38.4,
  },
  Content: {
    fontSize: 16,
    marginHorizontal: 24,
    fontWeight: '400',
    lineHeight: 22.4,
  },
  PageCounter: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  Page: {
    height: 10,
    width: 10,
    backgroundColor: Colors.DEFAULT_PRIMARY,
    borderRadius: 15,
    marginHorizontal: 4,
  },
  BtnContent: {
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
  },
  BtnLogin: {
    fontSize: 14,
    fontWeight: '500',
    alignSelf: 'center',
    color: Colors.DEFAULT_ORANGE,
  },
});

export default boarding;
