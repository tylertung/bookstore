import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../base/hook";
import Home from "../templates/Home";
import React from "react";
import SignupForm from "../components/authentication/SignupForm";
import LoginForm from "../components/authentication/LoginForm";
import { USER_INFO } from "../constant/common";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const { authorizing } = useAppSelector((state) => state.userLogin);

  const Content = React.useMemo(() => {
    if (authorizing) return <h1>Loading...</h1>;
    if (pathname === "/register") return <SignupForm />;
    if (pathname === "/login") return <LoginForm />;
    return <>{children}</>;
  }, [authorizing, pathname, children]);

  return Content;
};

export default Layout;
