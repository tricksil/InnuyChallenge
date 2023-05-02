import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeFactory } from '@/main/factories/screen/home/home-factory';
import { MapFactory } from '@/main/factories/screen/map/map-factory';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeFactory} />
        <Stack.Screen name="Map" component={MapFactory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
