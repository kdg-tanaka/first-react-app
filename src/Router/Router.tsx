import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Layout } from "../components/pages/Layout";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const Router: FC = () => {

  return(
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />}></Route>
          <Route path="user_management" element={<UserManagement />}></Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  )
}
