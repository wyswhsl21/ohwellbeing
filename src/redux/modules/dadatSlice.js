// 눌러서 댓글보기페이지

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { dadatApi } from "../../mytools/instance";

// thunk 함수

export const _getDadat = createAsyncThunk(
  "dadats/getDadat",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/dadats/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  dadats: [
    {
      id: 0,
      nickname: "s",
      memo: "s",
    },
  ],
  isLoading: false,
  error: null,
};

export const dadatSlice = createSlice({
  name: "dadats",
  initialState,
  //   reducers: {},
  extraReducers: {
    [_getDadat.pending]: (state) => {
      state.isLoading = true;
    },
    [_getDadat.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dadat = action.payload;
    },
    [_getDadat.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const {} = dadatSlice.actions;
export default dadatSlice.reducer;
