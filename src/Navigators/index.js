import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, OnBoarding, Login, Register} from '../Screens/Auth';
const Stack = createNativeStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="boarding" component={OnBoarding} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
