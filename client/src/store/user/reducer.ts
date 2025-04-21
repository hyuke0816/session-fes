// src/store/userReducer.ts
import { createReducer } from "typesafe-actions";
import { produce } from "immer";
import { LOGIN_SUCCESS } from "./actions";

// 초기 상태
const initialState = {
  user: null,
  isLoggedIn: false,
  authRole: null,
};

// 리듀서
const userReducer = createReducer(initialState, {
  [LOGIN_SUCCESS]: (state, { payload }: any) =>
    produce(state, (draft) => {
      draft.isLoggedIn = true;
      draft.authRole = payload.authRole;
    }),
});

export default userReducer;
