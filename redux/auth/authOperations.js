import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
  } from 'firebase/auth';
  import { getFirestore, collection, addDoc } from 'firebase/firestore';
  import auth from '../../firebase/config';
  import { authSlice } from './authReducer';
  
  export const authSignUpUser =
    ({ email, password, login }) =>
    async (dispatch, getState) => {
      console.log('user=======', email, password);
      try {
        await createUserWithEmailAndPassword(auth, email, password);
  
        const user = auth.currentUser;
  
        await updateProfile(user, {
          displayName: login,
        });
        const updateUserSuccess = await user.auth.currentUser;
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: updateUserSuccess.uid,
            login: updateUserSuccess.displayName,
          })
        );
        console.log('user', user);
      } catch (error) {
        console.log('error', error);
        console.log('error.message', error.message);
      }
    };
  export const authSignInUser =
    ({ email, password }) =>
    async (dispatch, getState) => {
      dispatch(authSlice.actions.setLoading(true));
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log('user', user);
      } catch (error) {
        console.log('error', error);
        console.log('error.message', error.message);
      }
      dispatch(authSlice.actions.setLoading(false));
    };
  
  export const authSignOutUser = () => async (dispatch, getState) => {
    dispatch(authSlice.actions.setLoading(true));
    await auth.signOut();
    dispatch(
      authSlice.actions.updateUserProfile({
        login: null,
        userId: null,
      })
    );
    dispatch(authSlice.actions.setLoading(false));
  };
  
  export const authStateChanged = () => async (dispatch, getState) => {
    dispatch(authSlice.actions.setLoading(true));
  
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        const userUpdateProfile = {
          login: user.displayName,
          userId: user.uid,
        };
  
        dispatch(
          authSlice.actions.updateUserProfile(userUpdateProfile)
        );
      }
      dispatch(authSlice.actions.setLoading(false));
    });
  };
  export const addComment = (postId, comment) => async (dispatch, getState) => {
    try {
      // Access the Firestore database
      const db = getFirestore();
  
      // Get the current user
      const currentUser = auth.currentUser;
  
      // Create a new comment object with user information
      const newComment = {
        postId,
        comment,
        userId: currentUser.uid,
        userName: currentUser.displayName,
        createdAt: new Date().toISOString(),
      };
  
      // Add the comment to the "comments" collection in Firestore
      const docRef = await addDoc(collection(db, 'comments'), newComment);
  
      // Update the Redux state with the new comment
      dispatch(
        authSlice.actions.addComment({
          id: docRef.id,
          ...newComment,
        })
      );
  
      console.log('Comment added successfully');
    } catch (error) {
      console.log('Error adding comment:', error);
    }
  };
  