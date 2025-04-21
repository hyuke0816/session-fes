export type AuthRole = "admin" | "user" | "guest"; // 관리자, 일반 사용자, 비회원 등급

export type LoginType = {
  id: string;
  password: string;
};
