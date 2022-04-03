import {Display} from '../../Utils';

const primary = typeWidth => ({
  buttonStyle: {
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: typeWidth ? Display.setWidth(typeWidth) : '100%',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default primary;
