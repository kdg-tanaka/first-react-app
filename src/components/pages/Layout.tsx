import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './organisms/layout/Header';

export const Layout: FC = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);
