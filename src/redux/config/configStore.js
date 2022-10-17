import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

/*reducer toolkit Slice.reducer
 */
import ohsik from "../modules/ohsikSlice";

// 내가 만든 리듀서를 넣어준다
const store = configureStore({
  reducer: { ohsik: ohsik },
});

export default store;
