import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useThemes} from '../../Themes/ThemeProvider';
import {regis} from '../../Ui/Auth';

const Register = () => {
  const {theme} = useThemes();
  return (
    <View style={regis.Container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.color.default_white}
        translucent
      />
      <Text> Register </Text>
    </View>
  );
};

export default Register;
