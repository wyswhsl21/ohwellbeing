// 눌러서 댓글보기페이지

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dadatApi } from "../../mytools/instance";

// thunk 함수

export const __postDadat = createAsyncThunk(
  "dadats/postDadat",
  async (payload, thunkAPI) => {
    try {
      const { data } = await dadatApi.postDadat(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getDadat = createAsyncThunk(
  "dadats/getDadat",
  async (payload, thunkAPI) => {
    try {
      const { data } = await dadatApi.getDadat(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __deleteDadat = createAsyncThunk(
  "dadats/deletDadat",
  async (payload, thunkAPI) => {
    try {
      const { data } = await dadatApi.deleteDadat(payload);
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
      nickname: "",
      memo: "",
    },
  ],
  isLoading: false,
  error: null,
};

export const dadatSlice = createSlice({
  name: "dadats",
  initialState,
  // reducers: {},
  extraReducers: {
    //  POST DADATS!!! 대댓글 추가하기!!
    [__postDadat.pending]: (state) => {
      state.isLoading = true;
    },
    [__postDadat.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dadats.push(action.payload);
      console.log("fulfilled 상태", state, action);
    },
    [__postDadat.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // GET DADATS!!! 대댓글 보여주기!
    [__getDadat.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDadat.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dadats = action.payload;
      console.log("fulfilled 상태", action.payload);
    },
    [__getDadat.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // DELET DADATS!!! 대댓글 지우기!!!
    [__deleteDadat.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteDadat.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("fulfilled 상태", state, action);
    },
    [__deleteDadat.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const {} = dadatSlice.actions;
export default dadatSlice.reducer;
