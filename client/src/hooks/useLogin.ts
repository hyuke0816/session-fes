import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { requestLogin } from "../store/user";

export default function useLogin() {
  const dispatch = useDispatch();

  const requestLogin = useCallback(
    (id: string, password: string) => {
      dispatch(requestLogin(id, password)); // saga에 로그인 요청
    },
    [dispatch]
  );

  return { requestLogin };
}
