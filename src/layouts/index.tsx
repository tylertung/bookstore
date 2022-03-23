import React from 'react';

import { useLocation } from 'react-router-dom';

import { useAppSelector } from '../base/hook';
import LoginForm from '../components/authentication/LoginForm';
import SignupForm from '../components/authentication/SignupForm';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const { authorizing } = useAppSelector((state) => state.userLogin);

  const Content = React.useMemo(() => {
    if (authorizing) return <h1>Loading...</h1>;
    if (pathname === '/register') return <SignupForm />;
    if (pathname === '/login') return <LoginForm />;
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }, [authorizing, pathname, children]);

  return Content;
};

export default Layout;
