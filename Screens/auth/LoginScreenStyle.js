import { StyleSheet, Dimensions } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: Dimensions.get('window').height / 3 - 489,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  header: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 32,
  },
  headerTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    color: '#212121',
  },
  form: {
    marginBottom: 144,
  },
  input: {
    fontFamily: 'Roboto-Regular',
    color: '#212121',
    fontSize: 16,
    padding: 16,
    lineHeight: 19,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    height: 50,
    marginHorizontal: 16,
  },
  inputFocused: {
    color: '#212121',
    borderColor: '#FF6C00',
    backgroundColor: '#FFFFFF',
    border: '1px solid #FF6C00',
  },
  showField: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 100,
    borderWidth: 1,
    height: 51,
    marginTop: 43,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6C00',
    borderColor: 'transparent',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  btnTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: '#f0f8ff',
  },
  login: {
    alignItems: 'center',
  },
  loginTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
  },
});