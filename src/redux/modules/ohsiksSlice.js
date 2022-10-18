import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { dadatApi, ohwellApi } from '../../mytools/instance';

const initialState = {
  ohwell: {},
  isLoading: false,
  error: null,
};
export const __getOhwells = createAsyncThunk(
  'ohwells/getOhwell',
  async (payload, thunkAPI) => {
    try {
      const { data } = await ohwellApi.getOhwells(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateOhwells = createAsyncThunk(
  'ohwells/upadteOhwell',
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await ohwellApi.patchOhwell(payload.id, payload.memo);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateDadat = createAsyncThunk(
  'ohsiks/dadats',
  async (payload, thunkAPI) => {
    try {
      //  인스턴스에서 만들어준 선서와 같게 넣어주어야함
      await dadatApi.patchDadat(payload); // 서버한테 보낸상태
      // 위에까지가 데이터베이스를 바꾼 식
      // 서버캐시데이터(서버랑 어플을 똑같이 만들어줘야함)
      // 성공했을때랑 실패했을때를 나눠서 리듀서에 보내준다
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const ohsiksSlice = createSlice({
  name: 'ohsiks',
  initialState,
  reducers: {},
  extraReducers: {
    [__getOhwells.pending]: (state) => {
      state.isLoading = true;
    },
    [__getOhwells.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ohwell = action.payload;
      console.log('fulfilled 상태', state, action);
    },
    [__getOhwells.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //patch 리듀서
    [__updateOhwells.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateOhwells.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ohwell = action.payload;
      console.log('fulfilled 상태', state, action);
    },
    [__updateOhwells.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__updateDadat.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateDadat.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.ohwell.dadats = payload.newComments;
    },
    [__updateDadat.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default ohsiksSlice.reducer;
