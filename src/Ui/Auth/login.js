import {StyleSheet} from 'react-native';
import {Display} from '../../Utils';
import {Colors, Fonts} from '../../Themes';

const login = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Logo: {
    width: Display.setWidth(90),
    height: Display.setHeight(9),
  },
  BoxLogo: {
    padding: Fonts.PADDING_16,
    alignSelf: 'center',
  },
  boxContent: {
    padding: Fonts.PADDING_16,
  },
  textTitle: {
    fontStyle: 'normal',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: Fonts.FONT_SIZE_24,
    display: 'flex',
    alignItems: 'center',
    color: Colors.DEFAULT_BLACK,
    lineHeight: 50,
  },
  boxField: {
    paddingTop: Fonts.PADDING_8,
    paddingBottom: Fonts.PADDING_8,
  },
  fieldTitle: {
    fontStyle: 'normal',
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: Fonts.FONT_SIZE_14,
    display: 'flex',
    alignItems: 'center',
    color: Colors.DEFAULT_BLACK_GREY,
    lineHeight: 30,
  },
  fieldInput: {
    borderRadius: 6,
    borderWidth: 1,
    paddingLeft: 12,
    paddingBottom: 9,
    paddingTop: 9,
  },
  fieldIconEye: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 54,
    paddingRight: 12,
  },
  fieldErrorText: {
    color: '#DC2626',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: Fonts.FONT_SIZE_14,
    fontWeight: '400',
    lineHeight: 18,
  },
  fieldBoxRemember: {flexDirection: 'row', justifyContent: 'space-between'},
  fieldRowCheck: {flexDirection: 'row'},
  fieldCheckBox: {
    top: 2,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#D1D5DB',
    width: 16,
    height: 16,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  fieldTextRemember: {
    marginLeft: 8,
    color: Colors.DEFAULT_BLACK_GREY,
    fontSize: Fonts.FONT_SIZE_14,
    fontWeight: '400',
    fontFamily: 'Inter',
    fontStyle: 'normal',
  },
  fieldTextForgot: {
    color: Colors.DEFAULT_PRIMARY,
    fontSize: Fonts.FONT_SIZE_14,
    fontWeight: '400',
    fontFamily: 'Inter',
    fontStyle: 'normal',
  },
  fieldBoxCreate: {flexDirection: 'row', justifyContent: 'center', padding: 16},
  fieldBoxButton: {
    paddingTop: 180,
    paddingLeft: 18,
    paddingRight: 18,
    position: 'relative',
  },
  fieldTextCreate1: {
    margin: 4,
    color: Colors.DEFAULT_WHITE_GREY,
    fontSize: Fonts.FONT_SIZE_14,
    fontWeight: '400',
    fontFamily: 'Inter',
    fontStyle: 'normal',
  },
  fieldTextCreate2: {
    margin: 4,
    color: Colors.DEFAULT_GREEN,
    fontSize: Fonts.FONT_SIZE_14,
    fontWeight: '500',
    fontFamily: 'Inter',
    fontStyle: 'normal',
  },
});

export default login;
