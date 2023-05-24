import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    login: null,
    isLoading: false,
    comments: [],
    error: null,
  },
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      login: payload.login,
    }),
    setLoading: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});