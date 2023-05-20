import React, { useCallback } from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import RegistrationScreen from './Screens/RegistarationScreen';
import LoginScreen from './Screens/LoginScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.image}
          source={require('./assets/img/wallpaper.jpg')}
        >
          <RegistrationScreen />
          {/* <LoginScreen />  */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
});