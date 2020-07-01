import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { HomeScreen } from './HomeScreen';
import { MenuScreen } from './MenuScreen';

export type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
};
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;

const Stack = createStackNavigator<RootStackParamList>();
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
