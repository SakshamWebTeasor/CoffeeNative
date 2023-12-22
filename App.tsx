import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen';
import PaymentScreen from './src/screen/PaymentScreen';
import TabNavigator from './src/navigators/TabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{animation: 'slide_from_bottom'}} /> */}
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
