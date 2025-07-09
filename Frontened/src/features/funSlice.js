import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: "",
  email: "",
  profilePic: "",
  role: "user",      
  loggedIn: false,
  loading: false,   
  error: null,      
};

const userSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
    loginStart: (state) => {
    state.loading = true;
    state.error = null;
    },   
    loginSuccess: (state, action) => {
    const { username, email, profilePic, role } = action.payload;
    state.username = username;
    state.email = email;
    state.profilePic = profilePic || "";
    state.role = role || "user";
    state.loggedIn = true;
    state.loading = false;
    state.error = null;
  },
   loginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  logout: (state) => {
    state.username = "";
    state.email = "";
    state.profilePic = "";
    state.role = "user";
    state.loggedIn = false;
    state.loading = false;
    state.error = null;
  },

}
})

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
