import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ohwellApi } from "../../hooks/instance";

const initialState = {
  ohwell: [
    {
      id: 0,
      nickname: "응 좋아",
      title: "샐러드 먹을래?",
      memo: "응 좋아",
    },
  ],
  isLoading: false,
  error: null,
};
export const __getOhwells = createAsyncThunk(
  "ohwells/getOhwell",
  async (payload, thunkAPI) => {
    try {
      const { data } = await ohwellApi.getOhwells(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const ohsiksSlice = createSlice({
  name: "ohsiks",
  initialState,
  reducers: {},
  extraReducers: {
    [__getOhwells.pending]: (state) => {
      state.isLoading = true;
    },
    [__getOhwells.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ohwell = action.payload;
      console.log("fulfilled 상태", state, action);
    },
    [__getOhwells.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default ohsiksSlice.reducer;
