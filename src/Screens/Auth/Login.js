import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useThemes} from '../../Themes/ThemeProvider';
import {login} from '../../Ui/Auth';

const Login = () => {
  const {theme} = useThemes();
  return (
    <View style={login.Container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.color.default_white}
        translucent
      />
      <Text> Login </Text>
    </View>
  );
};

export default Login;
