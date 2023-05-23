import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const BottomTab = createBottomTabNavigator();

import PostScreen from '../mainScreen/PostScreen';
import CreatePostsScreen from '../mainScreen/CreatePostsScreen';
import ProfileScreen from '../mainScreen/ProfileScreen ';

import LogOut from '../../assets/icons/log-out.svg';
import Back from '../../assets/icons/back.svg';
import Grid from '../../assets/icons/grid.svg';
import Union from '../../assets/icons/union.svg';
import User from '../../assets/icons/user.svg';

const Home = ({ navigation }) => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { height: 88 },
        headerShadowVisible: {
          backgroundColor: '#FFFFFF',
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 0.5 },
          shadowOpacity: 0.3,
          shadowRadius: 27.18,
        },
        headerTitleStyle: {
          marginBottom: 11,
          fontSize: 17,
          lineHeight: 22,
          color: '#212121',
        },
        headerRightContainerStyle: { paddingRight: 16, paddingBottom: 9 },
        headerLeftContainerStyle: { paddingLeft: 16, paddingBottom: 9 },

        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FF6C0065',
        tabBarStyle: {
          height: 83,
        },
      }}
    >
      <BottomTab.Screen
        options={{
          headerRight: ({ focused, size, color }) => (
            <TouchableOpacity>
              <LogOut width={24} height={24} fill="#bdbdbd" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, focused }) => (
            <View style={{ marginLeft: 82 }}>
              <Grid fill={focused ? color : '#bdbdbd'} width={24} height={24} />
            </View>
          ),
        }}
        name="Публикации"
        component={PostScreen}
      ></BottomTab.Screen>
      <BottomTab.Screen
        options={{
          tabBarStyle: { display: 'none' },
          tabBarVisible: false,
          headerRight: ({ focused, size, color }) => (
            <TouchableOpacity>
              <LogOut width={24} height={24} fill="#bdbdbd" />
            </TouchableOpacity>
          ),
          headerLeft: ({ focused, size, color }) => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Back width={24} height={24} fill="#bdbdbd" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? '#fff' : '#FF6C00',
                borderWidth: 1,
                borderColor: focused ? '#FF6C0065' : 'transparent',
                width: 70,
                height: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Union fill={focused ? color : '#fff'} width={24} height={24} />
            </View>
          ),
        }}
        name="Создать публикацию"
        component={CreatePostsScreen}
      ></BottomTab.Screen>
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={{ marginRight: 82 }}>
              <User fill={focused ? color : '#bdbdbd'} width={24} height={24} />
            </View>
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      ></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;