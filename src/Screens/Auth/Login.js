import React from 'react';
import {View, Text} from 'react-native';
import {login} from '../../Ui/Auth';

const Login = () => {
  return (
    <View style={login.Container}>
      <Text> Login </Text>
    </View>
  );
};

export default Login;
