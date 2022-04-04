import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';

const reset = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
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
  textDescription: {
    color: Colors.DEFAULT_BLACK_GREY,
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: 'Inter',
    fontWeight: '500',
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
  fieldErrorText: {
    color: '#DC2626',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: Fonts.FONT_SIZE_14,
    fontWeight: '400',
    lineHeight: 18,
  },
  fieldBoxButton: {
    padding: 16,
    position: 'relative',
  },
});

export default reset;
