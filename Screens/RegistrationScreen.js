import React, { useState } from 'react';
import {
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Text,
  Platform,
  KeyboardAvoidingView,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  ImageBackground,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './RegistrationStyles';

const initialState = {
  login: '',
  email: '',
  password: '',
};

const Show = <Icon name="eye" size={20} color="#BDBDBD" />;
const Hide = <Icon name="eye-slash" size={20} color="#BDBDBD" />;

export default function RegistarationScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [loginFocused, setLoginFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [focusedState, setFocusedState] = useState(false);

  const keyboardHide = () => {
    if (state.login === '' || state.email === '' || state.password === '') {
      console.log('Please fill in all fields...');
      return;
    }
    setState(initialState);
    console.log(state);
    Keyboard.dismiss();
  };

  const handlePasswordVisibility = () => {
    if (passwordVisibility) {
      setPasswordVisibility(false);
      return;
    }
    setPasswordVisibility(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.image}
        // style={{
        //   ...styles.image,
        //   height: dimensionsHeigth,
        //   width: Dimensions.get('window').width,
        // }}
        source={require('../../assets/img/wallpaper.jpg')}
      >
        <View
          style={{
            ...styles.container,
            marginTop: focusedState ? 160 : 0,
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View style={styles.form}>
              <View style={styles.photoWrapper}></View>
              <Image
                style={styles.addImg}
                source={require('../../assets/img/add.png')}
              />

              <View style={styles.header}>
                <Text style={styles.headerTitle}>Регистрация</Text>
              </View>
              <View style={{ marginBottom: 16 }}>
                <TextInput
                  style={
                    loginFocused
                      ? { ...styles.input, ...styles.inputFocused }
                      : styles.input
                  }
                  placeholder="Логин"
                  onFocus={() => {
                    setLoginFocused(true), setFocusedState(true);
                  }}
                  onBlur={() => setLoginFocused(false)}
                  value={state.login}
                  onChangeText={value =>
                    setState(prevState => ({ ...prevState, login: value }))
                  }
                />
              </View>
              <View style={{ marginBottom: 16 }}>
                <TextInput
                  style={
                    emailFocused
                      ? { ...styles.input, ...styles.inputFocused }
                      : styles.input
                  }
                  placeholder="Адрес электронной почты"
                  onFocus={() => {
                    setEmailFocused(true), setFocusedState(true);
                  }}
                  onBlur={() => setEmailFocused(false)}
                  value={state.email}
                  onChangeText={value =>
                    setState(prevState => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View>
                <TextInput
                  style={
                    passwordFocused
                      ? { ...styles.input, ...styles.inputFocused }
                      : styles.input
                  }
                  placeholder="Пароль"
                  secureTextEntry={passwordVisibility}
                  onFocus={() => {
                    setPasswordFocused(true), setFocusedState(true);
                  }}
                  onBlur={() => setPasswordFocused(false)}
                  value={state.password}
                  onChangeText={value =>
                    setState(prevState => ({ ...prevState, password: value }))
                  }
                />
                <Pressable
                  onPress={handlePasswordVisibility}
                  style={{ position: 'absolute', right: 25, top: '30%' }}
                >
                  <Text style={styles.showField}>
                    {passwordVisibility ? Hide : Show}
                  </Text>
                </Pressable>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.registr}
              >
                <Text style={styles.registrTitle}>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}