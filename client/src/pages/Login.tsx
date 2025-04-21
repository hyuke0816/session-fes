import { useRef } from "react";

export default function Login() {
  const idInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = idInputRef.current?.value;
    const password = passwordInputRef.current?.value;
  };

  return (
    <>
      <input
        type="text"
        name="userId"
        autoComplete="off"
        placeholder="User ID"
        required
        ref={idInputRef}
      />
      <label htmlFor="userId">User ID</label>
      <input
        type="password"
        name="password"
        autoComplete="off"
        placeholder="Password"
        required
        ref={passwordInputRef}
      />
      <label htmlFor="password">Password</label>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
