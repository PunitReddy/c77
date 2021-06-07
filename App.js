import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import IssLocationScreen from './screens/IssLocationScreen';
import MeteorScreen from './screens/MeteorScreen';
import UpdateScreen from './screens/UpdateScreen';

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home' screenOptions = {{headerShown: false}}>
        <Stack.Screen name = 'Home' component={HomeScreen}/>
        <Stack.Screen name = 'IssLocation' component={IssLocationScreen}/>
        <Stack.Screen name = 'Meteors' component={MeteorScreen}/>
        <Stack.Screen name = 'Update' component={UpdateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
