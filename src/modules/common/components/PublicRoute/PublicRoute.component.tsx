import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTER_KEYS, STORAGE_KEYS } from '../../consts/app-keys.const';

interface IProps {
  children: React.ReactNode;
  redirectPath?: string;
  restricted?: boolean;
}

export const PublicRoute: React.FC<IProps> = ({
  children,
  redirectPath = ROUTER_KEYS.ROOT,
  restricted = true
}): any => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const value = localStorage.getItem(STORAGE_KEYS.TOKEN);
    let userToken = null;
    if (value !== 'null') {
      userToken = value;
    }
    setToken(userToken);
  }, []);
  const shouldRedirect = token && restricted;

  if (shouldRedirect) {
    return <Navigate to={redirectPath} />;
  }
  return children;
};
