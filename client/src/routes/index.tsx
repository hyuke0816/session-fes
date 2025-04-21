import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import DefaultHeader from "../layouts/header";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/" element={<DefaultHeader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
