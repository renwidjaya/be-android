import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  OnBoarding,
  Login,
  Register,
  ForgotPassword,
} from '../Screens/Auth';
import {useLang} from '../Lang';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();

const Navigators = () => {
  const {lang} = useLang();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={lang.auth.splash}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={lang.auth.splash} component={Splash} />
        <Stack.Screen name={lang.auth.boarding} component={OnBoarding} />
        <Stack.Screen name={lang.auth.login} component={Login} />
        <Stack.Screen name={lang.auth.register} component={Register} />
        <Stack.Screen
          name={lang.auth.forgot_password}
          component={ForgotPassword}
        />
        <Stack.Screen name={lang.menu.home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
