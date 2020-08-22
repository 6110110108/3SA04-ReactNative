import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import zipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={zipCodeScreen} options={{
              headerTitleStyle: { 
              alignSelf: 'center' },
          }}/>
          <Stack.Screen name="Weather" component={WeatherScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
