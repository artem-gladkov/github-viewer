import {appRouter} from '../pages';
import React from 'react';
import {RouterProvider} from "react-router";

export const App = () => {
  return (
    <div className="app">
      <RouterProvider router={appRouter}/>
    </div>
  );
}
