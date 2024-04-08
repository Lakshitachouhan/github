import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser, fetchUserRepositories } from "../auth/authService";

const initialState = {
  user: null,
  repositories: [],
  isLoading: false,
  isError: false,
  isLoadingRepositories: false,
  isErrorRepositories: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
      })
      .addCase(fetchUserAsync.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchRepositoriesAsync.pending, (state) => {
        state.isLoadingRepositories = true;
        state.isErrorRepositories = false;
      })
      .addCase(fetchRepositoriesAsync.fulfilled, (state, action) => {
        state.isLoadingRepositories = false;
        state.repositories = action.payload;
        state.isErrorRepositories = false;
      })
      .addCase(fetchRepositoriesAsync.rejected, (state) => {
        state.isLoadingRepositories = false;
        state.isErrorRepositories = true;
      });
  },
});

export const selectUser = (state) => state.user.user;
export const selectRepositories = (state) => state.user.repositories;

export default userSlice.reducer;

export const fetchUserAsync = createAsyncThunk(
  "user/fetchUser",
  async (searchUser) => {
    try {
      const userData = await fetchUser(searchUser);
      return userData;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchRepositoriesAsync = createAsyncThunk(
  "user/fetchRepositories",
  async (input) => {
    try {
      const repositories = await fetchUserRepositories(input);
      return repositories;
    } catch (error) {
      throw error;
    }
  }
);
