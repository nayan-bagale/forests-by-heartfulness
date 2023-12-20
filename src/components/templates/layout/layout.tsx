import { ReactNode } from 'react';
import { Header } from '../header';

interface LayoutPropsInterface {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutPropsInterface) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
