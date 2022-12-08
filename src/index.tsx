import React from 'react';
import { createRoot } from 'react-dom/client';
import AppContainer from './modules/app';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
