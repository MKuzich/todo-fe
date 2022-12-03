import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ROUTER_KEYS, STORAGE_KEYS } from '../../consts/app-keys.const';

interface IProps {
  children: React.ReactNode;
  redirectPath?: string;
}

export const PrivateRoute: React.FC<IProps> = ({
  children,
  redirectPath = ROUTER_KEYS.WELCOME,
}): any => {
  const value = localStorage.getItem(STORAGE_KEYS.TOKEN);

  let token = null;
  if (value !== 'null') {
    token = value;
  }

  if (!token) {
    toast.info(
      'You do not have access to this page. Register or login to your account.'
    );
    return <Navigate to={redirectPath} />;
  }
  return children;
};
