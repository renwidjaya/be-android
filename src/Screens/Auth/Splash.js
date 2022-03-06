import React, {useEffect} from 'react';
import {View, StatusBar, Image} from 'react-native';
import {splash} from '../../Ui/Auth';
import {Colors, Images} from '../../Themes';
import {useSelector} from 'react-redux';
import {useLang} from '../../Lang';

const Splash = ({navigation}) => {
  const {lang} = useLang();
  const {token} = useSelector(state => state.Auth);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(token ? lang.menu.home : lang.auth.boarding);
    }, 2000);
  }, [lang.auth.boarding, lang.menu.home, navigation, token]);

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
