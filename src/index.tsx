import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import {appRouter} from "./pages";
import {RouterProvider} from "react-router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);
