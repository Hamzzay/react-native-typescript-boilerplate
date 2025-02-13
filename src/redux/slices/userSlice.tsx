import {createSlice} from '@reduxjs/toolkit';

const userSlicer = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    token: null,
    isLogin: false,
  },

  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },

    setAccessToken: (state, action) => {
      state.token = action.payload;
    },

    logOut: (state, action) => {
      state.isLogin = action.payload;
    },
    onLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const {setUser, setToken, setAccessToken, logOut, onLogin} =
  userSlicer.actions;

export default userSlicer.reducer;
