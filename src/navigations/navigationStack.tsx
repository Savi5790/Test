import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Homescreens} from '../screens/Home/Homescreens';
import {AboutScreen} from '../screens/Home/AboutScreen';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {registrationScreen} from '../screens/Home/registrationScreen';
const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="registrationScreen"
          component={registrationScreen}
        />

        <Stack.Screen name="Homescreens" component={Homescreens} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{title: 'Окно приветствия'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
