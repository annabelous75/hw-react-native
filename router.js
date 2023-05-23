import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = createStackNavigator();
const MainTab = createStackNavigator();

import RegistrationScreen from './screens/auth/RegistarationScreen';
import LoginScreen from './screens/auth/LoginScreen';
import Home from './screens/mainScreen/Home';
import CommentsScreen from './screens/mainScreen/CommentsScreen';
import MapScreen from './screens/mainScreen/MapScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      ></MainTab.Screen>
      <MainTab.Screen
        options={{ headerShown: false }}
        name="Comment"
        component={CommentsScreen}
      ></MainTab.Screen>
      <MainTab.Screen
        options={{ headerShown: false }}
        name="Map"
        component={MapScreen}
      ></MainTab.Screen>
    </MainTab.Navigator>
  );
};