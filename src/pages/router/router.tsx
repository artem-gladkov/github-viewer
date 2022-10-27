import {createBrowserRouter,} from "react-router-dom";
import {SearchPage} from "../search-page";
import { Root } from "../root";
import {PATHS} from "./constants";

export const appRouter = createBrowserRouter([{
  path: PATHS.MAIN,
  element: <Root/>,
  children: [{
    path: PATHS.SEARCH,
    element: <SearchPage />
  }],
}])
