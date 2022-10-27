import {appRouter} from '../pages';
import React from 'react';
import {RouterProvider} from "react-router";

import styles from './App.module.scss'
import classNames from "classnames";

export const App = () => {
  return (
    <div className={classNames('app', styles.app)}>
      <RouterProvider router={appRouter}/>
    </div>
  );
}
