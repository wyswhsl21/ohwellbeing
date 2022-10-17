import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ohwellApi } from "../../mytools/instance";

const initialState = {
  ohwells: [
    {
      id: 0,
      nickname: "홍길동",
      title: "오늘 점심 메뉴",
      memo: "오늘 점심 샐러드 맛있음",
    },
  ],
  ohwell: {
    id: 0,
    nickname: "",
    title: "",
    memo: "",
  },
  isLoading: false,
  error: null,
};

export const __getOhwell = createAsyncThunk(
  "ohwell/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await ohwellApi.getOhwell();
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const ohsikSlice = createSlice({
  name: "ohsik",
  initialState,
  reducers: {
    addMemo: (state, action) => {
      const id = state.ohwells.length - 1;
      console.log(action.payload);
      return {
        ...state,
        ohwells: [
          ...state.ohwells,
          {
            nickname: action.payload[0],
            title: action.payload[1],
            memo: action.payload[2],
            id: id + 1,
          },
        ],
      };
    },
  },
  extraReducers: {
    // pending,fullfilled,rejected에 대해 각각 새로운 state 반환!
    //pending 은 이행 하기 전 상태!
    [__getOhwell.pending]: (state) => {
      state.isLoading = true; //네트워크 요청 시작 로딩 상태 true!
    },
    //fulfilled 은 이행 완료 상태!
    [__getOhwell.fulfilled]: (state, action) => {
      //thunkAPI.fulfillWithValue(data.data) 액션객체가 디스패치 됨.
      state.Loading = false; //네트워크 요청 끝났으니 false로 변경
      state.ohwell = action.payload;
      console.log("fulfilled 상태", state, action);
    },
    //rejected 는 이행 실패 상태!
    [__getOhwell.rejected]: (state, action) => {
      state.isLoading = false; //에러가 발생했지만 ,네트워크 요청 끝났으니 false로 변경
      state.error = action.payload; //catch 된 error 객체를 state.error에 넣음!
    },
  },
});

export const { addMemo } = ohsikSlice.actions;
export default ohsikSlice.reducer;
