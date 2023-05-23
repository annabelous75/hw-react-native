import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <Image
          alt={'user'}
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
});

export default PostScreen;