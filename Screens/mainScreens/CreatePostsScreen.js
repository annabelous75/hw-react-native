import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import Camera from '../../assets/icons/camera.svg';
import MapPin from '../../assets/icons/map-pin.svg';
import Delete from '../../assets/icons/delete.svg';

const CreatePostsScreen = () => {
  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get('window').width
  );
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width;
      setWindowWidth(width);
    };
    const dimensionsHandler = Dimensions.addEventListener('change', onChange);

    return () => dimensionsHandler.remove();
  }, []);

  const addPhoto = () => {
    console.log('add photo');
  };

  return (
    <TouchableWithoutFeedback>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <View style={{ ...styles.photoWrapper, width: windowWidth - 16 * 2 }}>
            <TouchableOpacity style={styles.camera} onPress={addPhoto}>
              <Camera fill="#bdbdbd" width={24} height={24} />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 16, marginRight: 'auto' }}>
            <Text style={styles.textUnderPhoto}>Загрузите фото</Text>
          </View>

          <View style={styles.form}>
            <View style={{ width: windowWidth - 16 * 2, position: 'relative' }}>
              <TextInput style={styles.input} placeholder="Название..." />
            </View>
            <View style={{ marginTop: 16, width: windowWidth - 16 * 2 }}>
              <MapPin
                fill="#bdbdbd"
                width={24}
                height={24}
                position="absolute"
                top={13}
                left={0}
              />
              <TextInput
                style={{ ...styles.input, paddingLeft: 25 }}
                placeholder="Местность..."
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={() => console.log('press')}
            >
              <Text style={styles.btnTitle}>Опубликовать</Text>
            </TouchableOpacity>
          </View>

          <View
          // style={{
          //   marginTop: 'auto',
          // }}
          >
            <TouchableOpacity style={styles.deletePost}>
              <Delete fill="#bdbdbd" width={20} height={20} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 22,
    paddingTop: 32,
  },
  photoWrapper: {
    width: 343,
    height: 240,
    backgroundColor: '#f6f6f6',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    borderColor: '#E8E8E8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  textUnderPhoto: {
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    marginBottom: 32,
  },
  input: {
    height: 50,
    fontSize: 16,
    lineHeight: 19,
    color: '#bdbdbd',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: '#E8E8E8',
    borderWidth: 1,
  },
  btn: {
    marginTop: 32,
    backgroundColor: '#f6f6f6',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  btnTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: '#bdbdbd',
  },
  deletePost: {
    width: 70,
    height: 40,
    backgroundColor: '#F6F6F6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
    borderRadius: 20,
  },
});

export default CreatePostsScreen;
