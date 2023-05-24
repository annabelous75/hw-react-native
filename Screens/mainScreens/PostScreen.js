import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import { authSignOutUser } from '../../../redux/auth/authOperations';
const PostScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      dispatch(authSignOutUser());
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.log('Ошибка входа:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Вийти</Text>
      </TouchableOpacity>
      <View style={styles.userWrapper}>
        <Image
          alt="user"
          source={require('../../assets/img/User.png')}
          width={60}
          height={60}
        />
        <View style={styles.infoWrapper}>
          <Text style={{ fontFamily: 'Roboto-Bold' }}>Natali Romanova</Text>
          <Text>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#fff',
  },
  userWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  infoWrapper: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  logoutButton: {
    alignSelf: 'flex-end',
    margin: 16,
  },
  logoutButtonText: {
    color: 'red',
    fontSize: 16,
  },
});

export default PostScreen;
