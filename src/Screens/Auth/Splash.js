import React from 'react';
import {View, StatusBar, Image} from 'react-native';
import {splash} from '../../Ui/Auth';
import {Colors, Images} from '../../Themes';

const Splash = () => {
  return (
    <View style={splash.Container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_PRIMARY}
      />
      <Image source={Images.LOGO} style={splash.Logo} />
    </View>
  );
};

export default Splash;
