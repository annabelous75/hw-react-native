import React from 'react';
import { Text, View, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { addComment } from '../../redux/auth/authOperations';
const CommentsScreen = () => {
  const [comment, setComment] = useState('');
  const postId = useSelector(state => state.posts.currentPostId);
  const dispatch = useDispatch();

  const handleAddComment = async () => {
    if (comment.trim() === '') {
      return;
    }

    try {
      const commentsRef = firebase.firestore().collection('comments');

      const newComment = {
        postId: postId,
        comment: comment,
      };

      await commentsRef.add(newComment);

      
      dispatch(addComment(newComment));

      setComment('');
    } catch (error) {
      console.log('Помилка додавання коментаря:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Введіть коментар"
        value={comment}
        onChangeText={setComment}
      />
      <TouchableOpacity onPress={handleAddComment} style={styles.addButton}>
        <Text style={styles.buttonText}>Додати коментар</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CommentsScreen;