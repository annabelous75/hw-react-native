import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Text,
  Platform,
  KeyboardAvoidingView,
  Pressable,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { authSignUpUser } from '../../../redux/auth/authOperations';
import { styles } from '../LoginScreenStyle';

const initialState = {
  email: '',
  password: '',
};

const Show = <Icon name="eye" size={20} color="#BDBDBD" />;
const Hide = <Icon name="eye-slash" size={20} color="#BDBDBD" />;

export default function LoginScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [focusedState, setFocusedState] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const user = await firebase.auth().currentUser;
        if (user) {
          navigation.navigate('PostsScreen');
        }
      } catch (error) {
        console.log('Ошибка проверки аутентификации:', error);
      }
    };

    checkAuthStatus();
  }, []);
  const handleSubmit = async () => {
    if (state.email === '' || state.password === '') {
      console.log('Please fill in all fields...');
      return;
    }
    
    setIsShowKeyboard(false);
    Keyboard.dismiss();

    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(
        state.email,
        state.password
      );
      const user = userCredential.user;
      
      dispatch(authSignUpUser({
        id: user.uid,
        email: user.email,
        displayName: user.displayName
      }));

      setState(initialState);
    } catch (error) {
      console.log('Ошибка входа', error.message);
    }
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
            marginTop: focusedState ? 290 : 0,
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}
          >
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Войти</Text>
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
                onPress={handleSubmit}
              >
                <Text style={styles.btnTitle}>Войти</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Registration')}
                style={styles.login}
              >
                <Text style={styles.loginTitle}>
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}