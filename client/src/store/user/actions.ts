import { createAction } from "typesafe-actions";
import { LoginType } from "./types";

export const REQUEST_LOGIN = "REQUEST_LOGIN"; // 로그인 요청
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"; // 로그인 성공
export const LOGIN_FAILURE = "LOGIN_FAILURE"; // 로그인 실패
export const REQUEST_LOGOUT = "REQUEST_LOGOUT"; // 로그아웃 요청
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"; // 로그아웃 성공
export const LOGOUT_FAILURE = "LOGOUT_FAILURE"; // 로그아웃 실패
export const REQUEST_SIGNUP = "REQUEST_SIGNUP"; // 회원가입 요청
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"; // 회원가입 성공
export const SIGNUP_FAILURE = "SIGNUP_FAILURE"; // 회원가입 실패
export const REQUEST_USER_INFO = "REQUEST_USER_INFO"; // 사용자 정보 요청
export const USER_INFO_SUCCESS = "USER_INFO_SUCCESS"; // 사용자 정보 성공
export const USER_INFO_FAILURE = "USER_INFO_FAILURE"; // 사용자 정보 실패

// saga에서 사용할 액션 생성자
export const requestLogin = createAction(REQUEST_LOGIN)<LoginType>();
export const requestLogout = createAction(REQUEST_LOGOUT);
export const requestSignup = createAction(REQUEST_SIGNUP);
export const requestUserInfo = createAction(REQUEST_USER_INFO);

// reducer
export const isLoginSuccess = createAction(LOGIN_SUCCESS);
export const isLoginFailure = createAction(LOGIN_FAILURE);
export const isLogoutSuccess = createAction(LOGOUT_SUCCESS);
export const isLogoutFailure = createAction(LOGOUT_FAILURE);
export const isSignupSuccess = createAction(SIGNUP_SUCCESS);
export const isSignupFailure = createAction(SIGNUP_FAILURE);
export const isUserInfoSuccess = createAction(USER_INFO_SUCCESS);
export const isUserInfoFailure = createAction(USER_INFO_FAILURE);
